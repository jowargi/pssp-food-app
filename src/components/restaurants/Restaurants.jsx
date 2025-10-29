import styles from "./Restaurants.module.css";
import RestaurantNavigationContainer from "../restaurantNavigation/RestaurantNavigationContainer";

export default function Restaurants() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Restaurants</h2>
      <RestaurantNavigationContainer />
    </section>
  );
}
