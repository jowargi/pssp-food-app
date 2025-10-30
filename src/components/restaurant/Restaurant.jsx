import styles from "./Restaurant.module.css";

export default function Restaurant({ restaurantName }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{restaurantName}</h3>
    </div>
  );
}
