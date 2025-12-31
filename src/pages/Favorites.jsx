import { useFavorites } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="home">
      <h1> Favorites ❤️</h1>
      <div className="grid">
        {favorites.map((m) => <MovieCard key={m.imdbID} movie={m} />)}
      </div>
    </div>
  );
}
