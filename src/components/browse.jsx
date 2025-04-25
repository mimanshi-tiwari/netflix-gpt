import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies";
import Header from "./header";
import BackdropWrapper from "./movie-backdrop/backdrop-wrapper";
import SuggestionsWrapper from "./movie-suggestions/suggestions-wrapper";

const Browse = () => {
  useNowPlayingMovies()
  return (
    <>
      <Header />
      <BackdropWrapper />
      <SuggestionsWrapper />
    </>
  );
};

export default Browse;
