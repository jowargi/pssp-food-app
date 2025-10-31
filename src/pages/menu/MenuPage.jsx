import { useParams } from "react-router-dom";
import { useGetDishesByRestaurantIdQuery } from "../../redux/api/dishes/api";
import ErrorFallback from "../../components/errorFallback/ErrorFallback";
import styles from "./MenuPage.module.css";
import DishesContainer from "../../components/dishes/DishesContainer";
import { useThemeColorContext } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import classNames from "classnames";

export default function MenuPage() {

  const { themeColor } = useThemeColorContext();
   
  const { restaurantId } = useParams();

  const { error, isLoading, isFetching, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading || isFetching) return <p>Загрузка...</p>;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  return (
    <div className={styles.container}>
      <h4 className={classNames(styles.title, styles[`title--${themeColor}`])}>Меню</h4>
      <DishesContainer />
    </div>
  );
}
