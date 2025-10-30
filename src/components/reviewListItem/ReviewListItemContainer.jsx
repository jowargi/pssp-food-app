import { useParams } from "react-router-dom";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/api/reviews/api";
import ReviewListItem from "./ReviewListItem";

export default function ReviewListItemContainer({ reviewId }) {
  const { restaurantId } = useParams();

  const { data: review } = useGetReviewsByRestaurantIdQuery(restaurantId, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data?.find((review) => review.id === reviewId),
    }),
  });

  const { text: reviewText, rating: reviewRating } = review || {};

  return reviewText && reviewRating ? (
    <ReviewListItem reviewText={reviewText} reviewRating={reviewRating} />
  ) : null;
}
