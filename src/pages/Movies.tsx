import { fetchMovies } from "@api/movies";
import Loader from "@components/Loader/Loader";
import MoviesList from "@components/MoviesList/MoviesList";
import SearchForm from "@components/SearchForm/SearchForm";
import { Container, Section, Title } from "@components/Styled/Common";
import { DailyTrendsResponse } from "@interfaces/api";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") || "";

  const { data, isLoading } = useQuery(["data", movieName], () =>
    fetchMovies<DailyTrendsResponse>(
      `search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`
    )
  );

  const updateParams = (name: string) => {
    const nextParams = name ? { name } : {};
    setSearchParams(nextParams as string);
  };

  return (
    <Section>
      <Container>
        <Title>Search Movies</Title>
        <SearchForm value={movieName} onChange={updateParams} />
        {isLoading ? (
          <Loader />
        ) : data?.results.length ? (
          <MoviesList movies={data.results} />
        ) : (
          <h2 style={{marginTop: '1rem'}}>No matches!</h2>
        )}
      </Container>
    </Section>
  );
};

export default Movies;
