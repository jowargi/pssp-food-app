import classNames from "classnames";
import styles from "./Footer.module.css";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";

export default function Footer() {
  const { themeColor } = useThemeColorContext();
  return (
    <footer
      className={classNames(styles.footer, styles[`footer--${themeColor}`])}
    >
      <p className={styles.copyright}>Copyright © 2025 ПузоРадость</p>
      <address className={styles.address}>Kurgan, Russia</address>
    </footer>
  );
}
