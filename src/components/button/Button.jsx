import { useThemeColorContext } from "../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./Button.module.css";
import classNames from "classnames";

export default function Button({
  children,
  type = "button",
  onClick,
  style,
  isDisabled = false,
}) {
  const {themeColor} = useThemeColorContext();
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      disabled={isDisabled}
      className={classNames(styles.button, {
        [styles["button--light"]]: themeColor === "light",
        [styles["button--dark"]]: themeColor === "dark",        
        [styles["button--disabled"]]: isDisabled,
      })}
    >
      {children}
    </button>
  );
}
