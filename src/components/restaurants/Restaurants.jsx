import styles from "./Restaurants.module.css";
import RestaurantNavigationContainer from "../restaurantNavigation/RestaurantNavigationContainer";
import RestaurantViewContainer from "../restaurantView/RestaurantViewContainer";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import classNames from "classnames";

export default function Restaurants() {

  const { themeColor } = useThemeColorContext();

  return (
    <section className={styles.container}>
      <h2 className={classNames(styles.title,styles[`title--${themeColor}`])}>Рестораны</h2>
      <RestaurantNavigationContainer />
      <RestaurantViewContainer />
    </section>
  );
}
