import { fetchMovies } from "@api/movies";
import CastList from "@components/CastList/CastList";
import { MovieCreditsResponse } from "@interfaces/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Cast = () => {
  const { movieId } = useParams();

  const { data } = useQuery("data", () =>
    fetchMovies<MovieCreditsResponse>(
      `movie/${movieId as string}/credits?language=en-US`
    )
  );

  return <div>{data !== undefined && <CastList cast={data.cast} />} </div>;
};

export default Cast;
