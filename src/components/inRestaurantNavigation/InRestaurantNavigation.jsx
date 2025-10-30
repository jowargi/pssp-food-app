import RouterLink from "../routerLink/RouterLink";
import styles from "./InRestaurantNavigation.module.css";

export default function InRestaurantNavigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <RouterLink to="menu">Menu</RouterLink>
        </li>
        <li>
          <RouterLink to="reviews">Reviews</RouterLink>
        </li>
      </ul>
    </nav>
  );
}
