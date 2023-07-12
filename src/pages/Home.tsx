import { fetchMovies } from "@api/movies";
import { DailyTrendsResponse } from "@interfaces/api";
import { useQuery } from "react-query";
import TrendingList from "@components/TrendingList/TrendingList";

const Home = () => {
  const { data, isLoading } = useQuery("data", () =>
    fetchMovies<DailyTrendsResponse>("trending/all/day?language=en-US")
  );

  return (
    <div>
      <h1>Trending Today:</h1>
      {!isLoading && <TrendingList movies={data?.results} />}
    </div>
  );
};

export default Home;
