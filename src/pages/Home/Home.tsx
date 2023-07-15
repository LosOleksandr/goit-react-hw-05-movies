import { fetchMovies } from "@api/movies";
import { DailyTrendsResponse } from "@interfaces/api";
import { useQuery } from "react-query";
import { Section, Container, Title } from "./Home.styled";
import MoviesList from "@components/MoviesList/MoviesList";

const Home = () => {
  const { data, isLoading } = useQuery("data", () =>
    fetchMovies<DailyTrendsResponse>("trending/all/day?language=en-US")
  );

  return (
    <Section>
      <Container>
        <Title>Trending Today:</Title>
        {!isLoading && <MoviesList movies={data?.results} />}
      </Container>
    </Section>
  );
};

export default Home;
