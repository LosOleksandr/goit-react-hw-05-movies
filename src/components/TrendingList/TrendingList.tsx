import { Movies } from "@interfaces/api";

interface TrendinggListProps {
  movies: Movies[] | undefined;
}

const TrendingList: React.FC<TrendinggListProps> = ({ movies }) => {
  return (
    <ul>
      {movies?.map(
        ({ id, poster_path, title, release_date, name, first_air_date }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title || name}
              width={100}
            />
            <h3>{title || name}</h3>
            <p>{(release_date || first_air_date)?.slice(0, 4)}</p>
          </li>
        )
      )}
    </ul>
  );
};

export default TrendingList;
