import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Movies from "@pages/Movies";
import MovieDetails from "@pages/MovieDetails";
import Cast from "@pages/Cast";
import Reviews from "@pages/Reviews";
import SharedLayout from "./SharedLayout/SharedLayout";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="credits" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
