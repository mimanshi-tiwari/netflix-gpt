import GptMovieSuggestion from "./gpt-movie-suggestions";
import GPTSearchBar from "./gpt-search-bar";

const GPTSearch = () => {
  return (
    <div>
      <GPTSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GPTSearch;
