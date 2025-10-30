import styles from "./ReviewListItem.module.css";

export default function ReviewListItem({ reviewText, reviewRating }) {
  return (
    <li className={styles.item}>
      <p className={styles.text}>{reviewText}</p>
      <p className={styles.rating}>{new Array(reviewRating + 1).join("★")}</p>
    </li>
  );
}
