import { useSelector } from "react-redux";
import MovieDetails from "./movie-details";
import MoviewTrailer from "./movie-trailer";

const BackdropWrapper = () => {
  const movies = useSelector((store) => store.movies.nowPlaying);
  if (!movies.length) return;
  const previewMovie = movies[0];
  const { title, overview, id } = previewMovie;
  return (
    <div>
      <MovieDetails title={title} overview={overview} />
      <MoviewTrailer movieId={id} />
    </div>
  );
};

export default BackdropWrapper;
