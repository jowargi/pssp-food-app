import classNames from "classnames";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./DishListItem.module.css";

export default function DishListItem({ dishName, ingredients }) {
  const { themeColor } = useThemeColorContext();

  return (
    <li className={classNames(styles.item, styles[`item--${themeColor}`])}>
      <h5 className={classNames(styles.title, styles[`title--${themeColor}`])}>{dishName}</h5>
      <p className={classNames(styles.ingredients, styles[`ingredients--${themeColor}`])}>{ingredients.join(", ")}</p>
    </li>
  );
}
