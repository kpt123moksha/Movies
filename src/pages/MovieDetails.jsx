import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../api";


function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p style={{ color: "white" }}>Loading...</p>;

  return (
    <div className="details">
      <img src={movie.Poster} />
      <div>
        <h1>{movie.Title}</h1>
        <p>{movie.Plot}</p>
        <p><b>Genre:</b> {movie.Genre}</p>
        <p><b>Actors:</b> {movie.Actors}</p>
        <p><b>IMDB:</b> ⭐ {movie.imdbRating}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
