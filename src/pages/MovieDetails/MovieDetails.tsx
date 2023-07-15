import { fetchMovies } from "@api/movies";
import MoviesCard from "@components/MovieCard/MoviesCard";
import { Details } from "@interfaces/api";
import { useQuery } from "react-query";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { Container, Section, Title } from "./MoviesDetails.styled";
import { useRef } from "react";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const fromRef = useRef(
    (location.state as { from: string })?.from ?? "/movies"
  );

  const { data } = useQuery("movie", () =>
    fetchMovies<Details>(`movie/${movieId as string}?language=en-US`)
  );

  return (
    <Section>
      <Container>
        <NavLink to={fromRef.current}>Go Back</NavLink>
        {data && (
          <>
            <Title>{data.original_title}</Title>
            <MoviesCard movie={data} />{" "}
          </>
        )}
        <div style={{ marginTop: "2rem" }}>
          <NavLink style={{ marginRight: "1rem" }} to="cast">
            Cast
          </NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>
        <Outlet />
      </Container>
    </Section>
  );
};

export default MovieDetails;
