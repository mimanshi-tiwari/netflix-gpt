import { useParams } from "react-router-dom";
import { NETFLIX_LOGO } from "../../shared/constants";
import MoviewTrailer from "../movie-backdrop/movie-trailer";
import MovieDetails from "./movie-details";
import useMovieDetails from "../../custom-hooks/useMovieDetails";
import useSimilarMovies from "../../custom-hooks/useSimilarMovies";

const MovieDetailsWrapper = () => {
    const { movieId } = useParams()
    useMovieDetails(movieId)
    useSimilarMovies(movieId)
  return (
    <div className="bg-black">
          <div className="absolute h-[68px] w-full flex justify-between gap items-center gap-8 px-2 py-1 bg-gradient-to-b from-black z-50">
            <img className="h-full" alt="netflix-logo" src={NETFLIX_LOGO} />
          </div>
          <MoviewTrailer movieId={movieId}/>
          <MovieDetails movieId={movieId} />
    </div>
  );
};

export default MovieDetailsWrapper;
