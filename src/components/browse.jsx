import { useSelector } from "react-redux";
import useMovies from "../custom-hooks/useMovies";
import { THEME } from "../shared/constants";
import Header from "./header";
import BackdropWrapper from "./movie-backdrop/backdrop-wrapper";
import SuggestionsWrapper from "./movie-suggestions/suggestions-wrapper";
import GPTSearch from "./gpt-search/gpt-search";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useMovies(THEME.NOW_PLAYING);
  useMovies(THEME.POPULAR);
  useMovies(THEME.TOP_RATED);
  useMovies(THEME.UPCOMING);

  return (
    <>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <BackdropWrapper />
          <SuggestionsWrapper />
        </>
      )}
    </>
  );
};

export default Browse;
