import { TBDB_IMG_URL } from "../../shared/constants"

const MovieCard = ({movie}) => {
    const { poster_path } = movie
    return (
        <div className="w-48">
            <img  alt="movie-poster" src={`${TBDB_IMG_URL}w200/${poster_path}`} />
        </div>
    )
}

export default MovieCard