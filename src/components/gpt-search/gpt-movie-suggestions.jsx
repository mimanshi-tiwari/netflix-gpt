import { useSelector } from "react-redux";
import MovieList from "../movie-suggestions/movie-list";

const GptMovieSuggestion = () => {
  const { gptMovies, gptMovieNames } = useSelector((store) => store.gpt);
  if (!gptMovieNames.length) return null;
  return (
    <div className="absolute top-60 w-screen p-4  bg-black text-white bg-opacity-90 overflow-y-scroll">
      <div>
        {gptMovieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovies?.[index] || []}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
