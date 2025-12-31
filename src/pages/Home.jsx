import { useState, useEffect } from "react";
import { API_URL } from "../api";
import MovieCard from "../components/MovieCard";
import "./Home.css"; // import custom CSS

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [featured, setFeatured] = useState(null); // Banner movie
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Load default trending movies on page load
  useEffect(() => {
    const loadTrending = async () => {
      setLoading(true);
      const res = await fetch(`${API_URL}&s=game&page=1`); // default trending search
      const data = await res.json();

      if (data.Search) {
        setFeatured(data.Search[0]);          // First movie as banner
        setMovies(data.Search.slice(1));      // Rest as trending list
      }

      setLoading(false);
    };

    loadTrending();
  }, []);

  // Search movies function
  const search = async (loadMore = false) => {
    if (!query) return;

    setLoading(true);
    const res = await fetch(`${API_URL}&s=${query}&page=${page}`);
    const data = await res.json();

    if (data.Search) {
      setMovies(loadMore ? [...movies, ...data.Search] : data.Search);
      setFeatured(null); // remove banner on search results
    }

    setLoading(false);
  };

  return (
    <div className="home">
      <div className="search-box">
  <input
    type="text"
    placeholder="Search movies..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  <button onClick={() => { setPage(1); search(); }}>
    🔍
  </button>
</div>

      {/* Featured Banner (full width) */}
{featured && (
  <div className="banner-wrapper">
    <div className="banner">
      <img src={featured.Poster} alt={featured.Title} />
      <div className="banner-info">
        <h1>{featured.Title}</h1>
        <p>{featured.Year}</p>
      </div>
    </div>
  </div>
)}


      {/* Movie Grid */}
      <h2>{featured ? "Trending" : "Search Results"}</h2>

      <div className="grid">
        {movies?.map((m) => (
          <MovieCard key={m.imdbID} movie={m} />
        ))}
      </div>

      {/* Load more only when searching */}
      {!featured && movies.length > 0 && (
        <button
          onClick={() => {
            setPage(page + 1);
            search(true);
          }}
        >
          Load More
        </button>
      )}

      {loading && <p>Loading...</p>}
    </div>
  );
}
