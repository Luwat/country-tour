import { NavLink } from "react-router-dom";
import CountryItem from "../components/CountryItem";

export default function CountryDetailsPage() {
    return <><NavLink to={'..'}>
        <button>Back</button>
        </NavLink >
        <CountryItem /></>
}