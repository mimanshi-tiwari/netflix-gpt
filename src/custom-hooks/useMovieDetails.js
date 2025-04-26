import { useEffect } from "react";
import { MOVIE_DETAILS } from "../shared/api-endpoints";
import { API_METHOD, API_OPTIONS } from "../shared/constants";
import { addMovieDetails } from "../slice/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(
    (store) => store.movies.movieDetails
  );

  useEffect(() => {
    if (!movieDetails[movieId]) getMovieDetails(movieId);
  }, [movieId]);

  const getMovieDetails = async (movieId) => {
    try {
      const response = await fetch(
        MOVIE_DETAILS.replace("{{MOVIE_ID}}", movieId),
        { method: API_METHOD.GET, ...API_OPTIONS }
      );
      const movieDetails = await response.json();
 
      dispatch(addMovieDetails({movieId, movieDetails}));
    } catch (err) {
      console.error("FailedTo fetch now playing trailer, err");
    }
  };
};

export default useMovieDetails;
