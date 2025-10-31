import classNames from "classnames";
import RouterLink from "../routerLink/RouterLink";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./InRestaurantNavigation.module.css";

export default function InRestaurantNavigation() {
  const { themeColor } = useThemeColorContext();

  return (
    <nav className={styles.nav}>
      <ul
        className={classNames(styles.list, {
          [styles["list--light"]]: themeColor === "light",
          [styles["list--dark"]]: themeColor === "dark",
        })}
      >
        <li>
          <RouterLink to="menu">Меню</RouterLink>
        </li>
        <li>
          <RouterLink to="reviews">Отзывы</RouterLink>
        </li>
      </ul>
    </nav>
  );
}
