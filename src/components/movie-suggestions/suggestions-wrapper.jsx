import { useSelector } from "react-redux";
import MovieList from "./movie-list";
import { titleCase } from "../../shared/utils";

const SuggestionsWrapper = () => {
  const movies = useSelector((store) => store.movies.movies);

  if (!Object.keys(movies || {}).length) return null

  return (
    <div className="bg-black">
      <div className="p-4 -mt-64 text-white">
        {Object.keys(movies).map((theme, index) => (
          <MovieList
            title={titleCase(Object.keys(movies)[index])}
            movies={movies[theme]}
            key={titleCase(Object.keys(movies)[index])}
          />
        ))}
      </div>
    </div>
  );
};

export default SuggestionsWrapper;
