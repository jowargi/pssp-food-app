import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import ThemeColorToggle from "../themeColorToggle/ThemeColorToggle";
import styles from "./Header.module.css";
import classNames from "classnames";

export default function Header() {
  const { themeColor } = useThemeColorContext();

  return (
    <header
      className={classNames(styles.header, styles[`header--${themeColor}`])}
    >
      <h1
        onPointerDown={(event) => event.preventDefault()}
        className={classNames(styles.title, styles[`title--${themeColor}`])}
      >
        ПузоРадость
      </h1>
      <div className={styles.container}>
        <ThemeColorToggle />
      </div>
    </header>
  );
}
