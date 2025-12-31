import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function MovieCard({ movie }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.some((m) => m.imdbID === movie.imdbID);

  return (
    <div className="card">
      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} />
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </Link>

      <button onClick={() => toggleFavorite(movie)}>
        {isFav ? "❌ Remove" : "❤️ Favorite"}
      </button>
    </div>
  );
}
