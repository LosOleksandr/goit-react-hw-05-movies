import { fetchMovies } from "@api/movies";
import { DailyTrendsResponse } from "@interfaces/api";

fetchMovies<DailyTrendsResponse>(
  "https://api.themoviedb.org/3/trending/all/day?language=en-US"
)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

function App() {
  return <div>App</div>;
}

export default App;
