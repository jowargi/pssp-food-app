import styles from "./Header.module.css";
import classNames from "classnames";

export default function Header() {
  return (
    <header className={classNames(styles.header, "clearfix")}>
      <h1
        onPointerDown={(event) => event.preventDefault()}
        className={styles.title}
      >
        Food App
      </h1>
    </header>
  );
}
