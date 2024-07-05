import Icon from "@mdi/react";
import classes from "./Header.module.css";
import { mdiMoonWaningCrescent, mdiWhiteBalanceSunny} from "@mdi/js";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const body = document.body;
  if (theme === 'dark') {
    body.style.backgroundColor = '#202c37';
    body.style.color = '#fff';
  } else {
    body.style.backgroundColor = '#fafafa';
    body.style.color = '#111517';
  }

  
  return (
    <header className={`${classes.header} ${theme === 'dark' ? classes.dark : null}`}>
      <section className={classes.section}>
        <div className="left">
          <h1>Where in the world?</h1>
        </div>
        <div onClick={toggleTheme} className={classes.right}>
          {theme === 'light' ? <Icon path={mdiWhiteBalanceSunny} size={1}/> :<Icon path={mdiMoonWaningCrescent} rotate={-25} size={1}/>}
          <p className={classes.themeText}>{theme} mode</p>
        </div>
      </section>
    </header>
  );
}
