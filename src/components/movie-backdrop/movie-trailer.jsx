import { useSelector } from "react-redux";
import useNowPlayingTrailer from "../../custom-hooks/useNowPlayingTrailer";
import { YT_VIDEO_URL } from "../../shared/constants";

const MoviewTrailer = ({ movieId }) => {
  useNowPlayingTrailer(movieId);
  const trailer = useSelector((store) => store.movies.nowPlayingTrailer);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={`${YT_VIDEO_URL.replace("{{VIDEO_KEY}}", trailer?.key)}?&autoplay=1&mute=1&controls=0&loop=1&rel=0&modestbranding=0&autohide=1&showinfo=0`}
        title="YouTube video player"
        frameBorder="0"
        // allow=" autoplay; clipboard-write;;"
        referrerPolicy="strict-origin-when-cross-origin"
        onTouchMove={() => {}}
      ></iframe>
    </div>
  );
};

export default MoviewTrailer;
