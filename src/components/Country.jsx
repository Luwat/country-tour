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
                <img className={classes.img} src={image} alt={image} width={'300px'} height={'190px'}/>
            </div>
            <div className={`${classes.lower} ${theme === 'dark' ? classes.dark : null}`}>
                <h2>{title}</h2>
                <p>{population}</p>
                <p>{region}</p>
                <p>{capital}</p>
            </div>
        </NavLink>
    )
}