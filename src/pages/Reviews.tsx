import { fetchMovies } from "@api/movies";
import ReviewsList from "@components/ReviewsList/ReviewsList";
import { MovieReviewsResponse } from "@interfaces/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { movieId } = useParams();

  const { data } = useQuery("data", () =>
    fetchMovies<MovieReviewsResponse>(
      `movie/${movieId as string}/reviews?language=en-US`
    )
  );

  return <div>{data ? <ReviewsList reviews={data.results} /> : null}</div>;
};

export default Reviews;
