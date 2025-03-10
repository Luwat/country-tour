/* eslint-disable react/jsx-key */
import { useParams, useRouteLoaderData, NavLink } from "react-router-dom";
import classes from "./CountryItem.module.css";
import Icon from "@mdi/react";
import { mdiArrowLeftThin } from "@mdi/js";
import { ThemeContext } from '../context/themeContext.jsx';
import { useContext } from "react";

export default function CountryItem() {
  const params = useParams();
  const data = useRouteLoaderData("root");
  const { theme} = useContext(ThemeContext)

  const existingCountry = data.find(
    (item) => item.name.common === params.title
  );

  return (
    <main>
      <div className={classes.navBtnWrapper}>
      <NavLink to={".."} >
        <button className={ `${classes.navBtn} ${theme === 'dark' ? classes.dark : null}`}>
          <Icon path={mdiArrowLeftThin} size={1}/>
          <span>Back</span>
        </button>
      </NavLink>
      </div>

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
            <div className={classes.left}>
              {existingCountry.name.nativeName && (
                <p>
                  <b>Native name: </b>
                  {
                    Object.values(existingCountry.name.nativeName)[
                      Object.values(existingCountry.name.nativeName).length - 1
                    ].common
                  }
                </p>
              )}
              <p><b>Population:</b> {existingCountry.population.toLocaleString()}</p>
              <p><b>Region:</b> {existingCountry.region}</p>
              {existingCountry.subregion ? (
                <p><b>Sub Region:</b> {existingCountry.subregion}</p>
              ) : (
                <p>No Sub Region</p>
              )}
              {existingCountry.capital ? (
                <p><b>Capital:</b> {existingCountry.capital}</p>
              ) : (
                <p>No Capital</p>
              )}
            </div>
            <div className={classes.right}>
              <p><b>Top Level Domain:</b> {existingCountry.tld}</p>
              {existingCountry.currencies && (
                <p>
                  <b>Currencies: </b>
                  {Object.values(existingCountry.currencies)[0].name}
                </p>
              )}
              {existingCountry.languages && (
                <p>
                  <b>Languages: </b>
                  {Object.values(existingCountry.languages).sort().join(", ")}
                </p>
              )}
            </div>
          </div>
          <div>
            <div className={classes.bordersWrapper}>
              <b className={classes.boldBorderText}>Border Countries:</b>
              <ul className={classes.bordersList}>
                {existingCountry.borders
                  ? existingCountry.borders.map((item) => {
                      const countryBorder = data.find((el) => el.cca3 === item);
                      return (
                        <li key={item}>
                          <NavLink to={`/${countryBorder.name.common}`}>
                            <button className={`${classes.listBtn} ${theme === 'dark' ? classes.dark : null}`}>{countryBorder.name.common}</button>
                          </NavLink>
                        </li>
                      );
                    })
                  : "No border country availalble"}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
