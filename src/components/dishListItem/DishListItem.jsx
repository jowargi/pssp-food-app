import styles from "./DishListItem.module.css";

export default function DishListItem({ dishName, ingredients }) {
  return (
    <li className={styles.item}>
      <h5 className={styles.title}>{dishName}</h5>
      <p className={styles.ingredients}>{ingredients.join(", ")}</p>
    </li>
  );
}
