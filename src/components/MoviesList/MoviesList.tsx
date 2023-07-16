import { Movies } from "@interfaces/api";
import { List, Item, ItemLink, ItemText } from "./MoviesList.styled";
import { useLocation } from "react-router-dom";
import noImage from "../../images/mo-image.jpg";

interface MoviesListProps {
  movies: Movies[] | undefined;
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies?.map(
        ({ id, poster_path, title, release_date, name, first_air_date }) => (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
              <div>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w400/${poster_path}`
                      : noImage
                  }
                  alt={title || name}
                />
              </div>

              <ItemText>
                {" "}
                {title || name}, {(release_date || first_air_date)?.slice(0, 4)}
              </ItemText>
            </ItemLink>
          </Item>
        )
      )}
    </List>
  );
};

export default MoviesList;
