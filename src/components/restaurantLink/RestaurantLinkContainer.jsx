import { useGetRestaurantsQuery } from "../../redux/api/restaurants/api";

export default function RestaurantLinkContainer({ restaurantId }) {
  const { data: restaurant } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((restaurant) => restaurant.id === restaurantId),
    }),
  });

  const { name: restaurantName } = restaurant;

  return null;
}
