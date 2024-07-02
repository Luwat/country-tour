/* eslint-disable react/jsx-key */
import { useParams, useRouteLoaderData, NavLink } from "react-router-dom";
import classes from "./CountryItem.module.css";

export default function CountryItem() {
  const params = useParams();
  const data = useRouteLoaderData("root");
  

  const existingCountry = data.find(
    (item) => item.name.common === params.title
  );

  

  return (
    <main>
      <NavLink to={'..'}><button>Back</button></NavLink>

    <section className={classes.section}>
      <div>
        <img
          className={classes.img}
          src={existingCountry.flags.png}
          alt={existingCountry.flag.alt}
        />
      </div>
      <div className={classes.flexParent}>
        <h1 className={classes.h1}>{existingCountry.name.common}</h1>
        <div className={classes.flexContainer}>
          <div>
            {existingCountry.name.nativeName && <p>Native name: {Object.values(existingCountry.name.nativeName)[Object.values(existingCountry.name.nativeName).length - 1].common}</p>}
            <p>Population: {existingCountry.population.toLocaleString()}</p>
            <p>Region: {existingCountry.region}</p>
            {existingCountry.subregion ? <p>Sub Region: {existingCountry.subregion}</p> : <p>No Sub Region</p>}
            {existingCountry.capital ? <p>Capital: {existingCountry.capital}</p> : <p>No Capital</p>}
          </div>
          <div>
            <p>Top Level Domain: {existingCountry.tld}</p>
            {existingCountry.currencies && <p>
              Currencies: {Object.values(existingCountry.currencies)[0].name}
            </p>}
            {existingCountry.languages && <p>Languages: {Object.values(existingCountry.languages).sort().join(", ")}</p>}
          </div>
        </div>
        <div>
          <p className={classes.pList}>
            Border Countries: 
            <span className={classes.li}>
            {existingCountry.borders
              ? existingCountry.borders.map((item) => {
                  const countryBorder = data.find((el) => el.cca3 === item);
                  return (
                    <li key={item}>
                      <NavLink to={`/${countryBorder.name.common}`}><button>{countryBorder.name.common}</button></NavLink>
                    </li>
                  );
                })
              : "No border country availalble"}
            </span>
          </p>
        </div>
      </div>
    </section>
    </main>
  );
}
