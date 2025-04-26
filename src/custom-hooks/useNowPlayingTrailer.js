import { useEffect } from "react";
import { NOW_PLAYING_TRAILER } from "../shared/api-endpoints";
import { API_METHOD, API_OPTIONS } from "../shared/constants";
import { addNowPlayingTrailer } from "../slice/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingTrailer = (movieId) => {
  const dispatch = useDispatch();
  const nowPlayingTrailer = useSelector(
    (store) => store.movies.nowPlayingTrailer
  );

  useEffect(() => {
    if (!nowPlayingTrailer?.length) getNowPlayingTrailer(movieId);
  }, [movieId]);

  const getNowPlayingTrailer = async (movieId) => {
    try {
      const response = await fetch(
        NOW_PLAYING_TRAILER.replace("{{MOVIE_ID}}", movieId),
        { method: API_METHOD.GET, ...API_OPTIONS }
      );
      const videos = await response.json();
      const trailers = videos.results.filter(
        (video) => video.type === "Trailer"
      );
      dispatch(addNowPlayingTrailer(trailers?.[0] || videos?.[0]));
    } catch (err) {
      console.error("FailedTo fetch now playing trailer, err");
    }
  };
};

export default useNowPlayingTrailer;
