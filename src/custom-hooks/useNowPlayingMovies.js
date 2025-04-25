import { useEffect, useState } from "react"
import { GET_NOW_PLAYING } from "../shared/api-endpoints";
import { API_METHOD, API_OPTIONS } from "../shared/constants";
import { addNowPlaying } from "../slice/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        getNowPlaying();
    }, [])
    
      const getNowPlaying = async () => {
        try {
          const response = await fetch(GET_NOW_PLAYING, {
            method: API_METHOD.GET,
            ...API_OPTIONS,
          });
          const nowPlayingMovie = await response.json();
          dispatch(addNowPlaying(nowPlayingMovie.results));
        } catch (err) {
          console.error("Failed to fetch now playing movies", err);
        }
      };
}

export default useNowPlayingMovies