import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./ReviewListItem.module.css";

export default function ReviewListItem({ reviewText, reviewRating }) {

  const { themeColor } = useThemeColorContext();

  return (
    <li className={classNames(styles.item,styles[`item--${themeColor}`])}>
      <p className={classNames(styles.text,styles[`text--${themeColor}`])}>{reviewText}</p>
      <p className={styles.rating}>{new Array(reviewRating + 1).join("★")}</p>
    </li>
  );
}
