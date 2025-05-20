import { useParams } from "react-router-dom";
import { NETFLIX_LOGO } from "../../shared/constants";
import MoviewTrailer from "../movie-backdrop/movie-trailer";
import MovieDetails from "./movie-details";
import useMovieDetails from "../../custom-hooks/useMovieDetails";
import useSimilarMovies from "../../custom-hooks/useSimilarMovies";
import Header from "../header";

const MovieDetailsWrapper = () => {
    const { movieId } = useParams()
    useMovieDetails(movieId)
    useSimilarMovies(movieId)
  return (
    <div className="bg-black">
          <Header />
          <MoviewTrailer movieId={movieId}/>
          <MovieDetails movieId={movieId} />
    </div>
  );
};

export default MovieDetailsWrapper;
