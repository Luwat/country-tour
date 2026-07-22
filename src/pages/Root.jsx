/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export async function loadCountry() {
  const response = await fetch("/.netlify/functions/api-proxy", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch data" }), {
      status: 500,
    });
  }

  const { data } = await response.json();

  return data;
}
