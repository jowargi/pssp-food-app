import { Navigate, Outlet, useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../redux/api/restaurants/api";
import Spinner from "../components/spinner/Spinner";
import ErrorFallback from "../components/errorFallback/ErrorFallback";

export default function RestaurantsPageRedirect() {
  const { restaurantId } = useParams();

  const {
    data: restaurantIds,
    error,
    isLoading,
    isError,
  } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.map((restaurant) => restaurant.id),
    }),
  });

  if (isLoading || !restaurantIds) return <Spinner />;

  if (isError)
    return <ErrorFallback name={error.status} message={error.error} />;

  if (restaurantId) return <Outlet />;

  return <Navigate to={`/restaurants/${restaurantIds[0]}`} />;
}
