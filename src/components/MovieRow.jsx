import MovieCard from "./MovieCard";
import "./MovieRow.css";

function MovieRow({ title, movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="row">
      <h2 className="row-title">{title}</h2>

      <div className="row-posters">
        {movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
