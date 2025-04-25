import { useSelector } from "react-redux";
import MovieDetails from "./movie-details";
import MoviewTrailer from "./movie-trailer";
import { THEME } from "../../shared/constants";

const BackdropWrapper = () => {
  const movies = useSelector((store) => store.movies.movies);
  if (!movies?.[THEME.NOW_PLAYING]?.length) return;
  const previewMovie = movies?.[THEME.NOW_PLAYING]?.[0];
  const { title, overview, id } = previewMovie;
  return (
    <div>
      <MovieDetails title={title} overview={overview} />
      <MoviewTrailer movieId={id} />
    </div>
  );
};

export default BackdropWrapper;
