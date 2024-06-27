/* eslint-disable react-refresh/only-export-components */
import { Outlet, json } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
    return <>
    <Header />
    <Outlet />
    </>
}

export async function loadCountry() {
    const response = await fetch('https://restcountries.com/v3.1/all');

    if (!response.ok) {
        throw json({message: 'Could not fetch data'}, {status: 500});
    }

    return response;
}