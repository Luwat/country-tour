/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import classes from './Country.module.css';
import { useContext } from "react";
import { ThemeContext} from "../context/themeContext"

export default function Country({title, image, population, region, capital}) {
    const { theme } = useContext(ThemeContext)
    return (
        <NavLink to={title}>
            <div>
                <img className={classes.img} src={image} alt={image} width={'250px'} height={'140px'}/>
            </div>
            <div className={`${classes.lower} ${theme === 'dark' ? classes.dark : null}`}>
                <h3>{title}</h3>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </NavLink>
    )
}