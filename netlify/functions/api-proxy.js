// netlify/functions/api-proxy.js

export async function handler(event, context) {
    // 1. Only allow POST requests (or GET, depending on your needs)
    if (event.httpMethod !== "GET") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    try {
        // 3. Read the secret key safely from environment variables (Server-side)
        const SECRET_KEY = process.env.REST_COUNTRIES_API_KEY;

        if (!SECRET_KEY) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "API key missing in environment variables" }),
            };
        }

        // 4. Make the call to the actual external API from the server side
        const apiResponse = await fetch("https://api.restcountries.com/countries/v5?response_fields=names,flag,capitals,region,population&limit=20", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${SECRET_KEY}`,
            }
        });

        const data = await apiResponse.json();

        // 5. Return response to your React frontend
        return {
            statusCode: apiResponse.status,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
}
