import { Outlet } from "react-router-dom";
import styles from "./Main.module.css";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import classNames from "classnames";

export default function Main() {

  const { themeColor } = useThemeColorContext();

  return (
    <main className={classNames(styles.main, styles[`main--${themeColor}`])}>
      <Outlet />
    </main>
  );
}
