import { useEffect } from "react";
import { SIMILAR_MOVIES } from "../shared/api-endpoints";
import { API_METHOD, API_OPTIONS, THEME } from "../shared/constants";
import { addMovies } from "../slice/moviesSlice";
import { useDispatch } from "react-redux";

const useSimilarMovies = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getSimilarMovies(movieId);
  }, [movieId]);

  const getSimilarMovies = async (movieId) => {
    try {
      const response = await fetch(SIMILAR_MOVIES.replace('{{MOVIE_ID}}', movieId).replace("{{THEME}}", THEME.SIMILAR), {
        method: API_METHOD.GET,
        ...API_OPTIONS,
      });
      const movies = await response.json();
      dispatch(addMovies({ theme: THEME.SIMILAR, movies: movies.results }));
    } catch (err) {
      console.error("Failed to fetch now playing movies", err);
    }
  };
};

export default useSimilarMovies;
