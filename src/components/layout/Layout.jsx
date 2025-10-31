import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import styles from "./Layout.module.css";
import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import classNames from "classnames";

export default function Layout() {

  const { themeColor } = useThemeColorContext();

  return (
    <div className={classNames(styles.container, styles[`container--${themeColor}`])}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
