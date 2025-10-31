import { Outlet } from "react-router-dom";
import InRestaurantNavigation from "../inRestaurantNavigation/InRestaurantNavigation";
import styles from "./Restaurant.module.css";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import classNames from "classnames";

export default function Restaurant({ restaurantName }) {

  const { themeColor } = useThemeColorContext();

  return (
    <div className={classNames(styles.container, styles[`container--${themeColor}`])}>
      <h3 className={classNames(styles.title, styles[`title--${themeColor}`])}>{restaurantName}</h3>
      <InRestaurantNavigation />
      <Outlet />
    </div>
  );
}
