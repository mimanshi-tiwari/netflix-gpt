import { useEffect } from "react";
import { GET_MOVIES } from "../shared/api-endpoints";
import { API_METHOD, API_OPTIONS } from "../shared/constants";
import { addMovies } from "../slice/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovies = (theme) => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.movies);

  useEffect(() => {
    if (!movies[theme]) getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const response = await fetch(GET_MOVIES.replace("{{THEME}}", theme), {
        method: API_METHOD.GET,
        ...API_OPTIONS,
      });
      const movies = await response.json();
      dispatch(addMovies({ theme, movies: movies.results }));
    } catch (err) {
      console.error("Failed to fetch now playing movies", err);
    }
  };
};

export default useMovies;
