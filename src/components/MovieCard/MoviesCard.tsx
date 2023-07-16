import { Details } from "@interfaces/api";
import { List, Item } from "./MoviesCard.styled";
import noImage from "../../images/mo-image.jpg";

interface MovieCardProps {
  movie: Details;
}

const MoviesCard: React.FC<MovieCardProps> = ({ movie }) => {
  const {
    poster_path,
    genres,
    release_date,
    budget,
    runtime,
    revenue,
    vote_average,
  } = movie;
  const genreNames = genres.map((genre) => genre.name).join(", ");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "1rem",
        gap: "10rem",
      }}
    >
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w400/${poster_path}`
            : noImage
        }
        alt=""
      />
      <div>
        <List>
          <Item>
            <p>Release Date: {release_date}</p>
          </Item>
          <Item>
            <p>Genres: {genreNames}</p>
          </Item>
          <Item>
            <p>Budget: {budget} $</p>
          </Item>
          <Item>
            <p>Revenue: {revenue}</p>
          </Item>
          <Item>
            <p>Runtime: {runtime}</p>
          </Item>
          <Item>
            <p>Vote Average: {vote_average}</p>
          </Item>
        </List>
      </div>
    </div>
  );
};

export default MoviesCard;
