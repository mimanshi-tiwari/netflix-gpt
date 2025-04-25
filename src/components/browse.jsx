import useMovies from "../custom-hooks/useMovies";
import { THEME } from "../shared/constants";
import Header from "./header";
import BackdropWrapper from "./movie-backdrop/backdrop-wrapper";
import SuggestionsWrapper from "./movie-suggestions/suggestions-wrapper";

const Browse = () => {
  useMovies(THEME.NOW_PLAYING);
  useMovies(THEME.POPULAR);
  useMovies(THEME.TOP_RATED);
  useMovies(THEME.UPCOMING);

  return (
    <>
      <Header />
      <BackdropWrapper />
      <SuggestionsWrapper />
    </>
  );
};

export default Browse;
