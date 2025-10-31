import { NavLink } from "react-router-dom";
import styles from "./RouterLink.module.css";
import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function RouterLink({ children, to, style }) {
  const { themeColor } = useThemeColorContext();

  return (
    <NavLink
      to={to}
      style={style}
      className={({ isActive }) =>
        classNames(styles.link, {
          [styles["link--active"]]: isActive,
          [styles["link--light"]]: themeColor === "light",
          [styles["link--dark"]]: themeColor === "dark",
        })
      }
    >
      {children}
    </NavLink>
  );
}
