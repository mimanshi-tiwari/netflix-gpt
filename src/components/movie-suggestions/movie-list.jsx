import MovieCard from "./movie-card";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null
  return (
    <div className="py-4">
      <div className="text-2xl font-semibold pb-2">{title}</div>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
