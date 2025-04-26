import { useSelector } from "react-redux";
import MovieList from "../movie-suggestions/movie-list";
import { THEME } from "../../shared/constants";

const MovieDetails = ({ movieId }) => {
  const { movieDetails, movies } = useSelector((store) => store.movies);

  if (!movieDetails[movieId]) return null;

  const { title, overview, tagline, vote_average, genres } =
    movieDetails[movieId] || {};

  return (
    <div className="absolute bg-black text-white  p-4 pl-0 w-screen ">
      <div className="-mt-60 flex flex-col gap-4 bg-gradient-to-r from-black p-4 pl-8 w-9/12">
        <div className="text-2xl font-semibold">
          {title} - {tagline}
        </div>
        {/* <p className="italic text-sm text-gray-400">{tagline}</p> */}
        <p className="text-sm">{overview}</p>
        <div className="text-xs text-gray-400 flex flex-row gap-2">
          {genres.map((g) => (
            <p>{g.name}</p>
          ))}
        </div>
        <div className="text-sm font-semibold">
          IMDB Rating: <span>{vote_average}</span>
        </div>
      </div>
      <div className="p-4">
      {movies[THEME.SIMILAR] && (
          <MovieList title="Similar Movies" movies={movies[THEME.SIMILAR]} />
        )}
        </div>
    </div>
  );
};
export default MovieDetails;
