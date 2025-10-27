import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import styles from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
