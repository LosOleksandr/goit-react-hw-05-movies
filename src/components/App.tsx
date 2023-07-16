import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout/SharedLayout";
import NotFound from "@pages/NotFound";

const Home = lazy(() => import("@pages/Home"));
const Movies = lazy(() => import("@pages/Movies"));
const MovieDetails = lazy(() => import("@pages/MovieDetails"));
const Cast = lazy(() => import("@pages/Cast"));
const Reviews = lazy(() => import("@pages/Reviews"));

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
