import { useRouteLoaderData } from "react-router-dom";
import Country from "./Country";
import classes from "./Countries.module.css";
import Icon from '@mdi/react';
import { mdiMagnify} from "@mdi/js";
import { useContext, useState } from "react";
import {ThemeContext} from '../context/themeContext'

export default function Countries() {
  const { theme } = useContext(ThemeContext)
  const [filtered, setFiltered] = useState("");
  const data = useRouteLoaderData("root");

  function handleFilter(event) {
    setFiltered(() => event.target.value);
  }


  const filteredCountries = data.filter(
    (item) =>
      item.region === filtered ||
      item.name.common.includes(filtered) ||
      item.name.common.toLowerCase().includes(filtered) ||
      item.name.common.toUpperCase().includes(filtered)
  );


  return (
    <>
      <div className={classes.inputControl}>
        <div className={`${classes.inputWrapper} ${theme === 'dark' ? classes.dark : null} `}>
          <Icon path={mdiMagnify} size={1}/>
          <p><input type="text" placeholder="Search for a country..." onChange={handleFilter} className={`${classes.input} ${theme === 'dark' ? classes.dark : null}`}/></p>
        </div>
        <p className={`${classes.selectWrapper} ${theme === 'dark' ? classes.dark : null}`}>
          <select className={`${theme === 'dark' ? classes.dark : null} ${theme === 'dark' ? classes.darkImg : classes.classic}`} name="" id="" onChange={handleFilter}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Antarctic">Antarctic</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>          
        </p>
      </div>
      <ul className={classes.ul}>
        {filteredCountries.map((country) => (
          <li key={country.name.common} className={`${classes.li} ${theme === 'dark' ? classes.dark : null}`}>
            <Country
              title={country.name.common}
              image={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
