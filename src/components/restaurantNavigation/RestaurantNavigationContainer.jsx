import { useGetRestaurantsQuery } from "../../redux/api/restaurants/api";
import RestaurantNavigation from "./RestaurantNavigation";

export default function RestaurantNavigationContainer() {
  const { data: restaurantIds } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.map((restaurant) => restaurant.id),
    }),
  });

  return restaurantIds?.length ? (
    <RestaurantNavigation restaurantIds={restaurantIds} />
  ) : null;
}
