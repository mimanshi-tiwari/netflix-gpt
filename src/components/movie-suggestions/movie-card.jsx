import { useNavigate } from "react-router-dom";
import { TBDB_IMG_URL } from "../../shared/constants";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { poster_path, id } = movie;
  if (!poster_path) return null;

  const handleMovieSelect = () => {
    navigate(`/browse/${id}`);
  };
  return (
    <div className="w-48 cursor-pointer" onClick={handleMovieSelect}>
      <img alt="movie-poster" src={`${TBDB_IMG_URL}w200/${poster_path}`} />
    </div>
  );
};

export default MovieCard;
