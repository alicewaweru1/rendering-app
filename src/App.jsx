import { useEffect, useState } from "react";
import MovieList from "./MovieList";

const starterMovies = [
  { id: 1, title: "Interstellar", genre: "Sci-Fi", favorite: true, rating: 5 },
  { id: 2, title: "The Godfather", genre: "Drama", favorite: false, rating: 4 },
  { id: 3, title: "The Dark Knight", genre: "Action", favorite: true, rating: 5 },
];

function App() {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");

    if (savedMovies) {
      return JSON.parse(savedMovies);
    }

    return starterMovies;
  });
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Sci-Fi");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    if (editingId) {
      setMovies((currentMovies) =>
        currentMovies.map((movie) =>
          movie.id === editingId ? { ...movie, title: title.trim(), genre } : movie
        )
      );
      setEditingId(null);
    } else {
      setMovies((currentMovies) => [
        {
          id: Date.now(),
          title: title.trim(),
          genre,
          favorite: false,
          rating: 0,
        },
        ...currentMovies,
      ]);
    }

    setTitle("");
    setGenre("Sci-Fi");
  };

  const deleteMovie = (id) => {
    setMovies((currentMovies) => currentMovies.filter((movie) => movie.id !== id));
  };

  const editMovie = (movie) => {
    setTitle(movie.title);
    setGenre(movie.genre);
    setEditingId(movie.id);
  };

  const toggleFavorite = (id) => {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === id ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  const rateMovie = (id, rating) => {
    setMovies((currentMovies) =>
      currentMovies.map((movie) =>
        movie.id === id ? { ...movie, rating } : movie
      )
    );
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!isLoaded) {
    return <h2 className="loading">Loading movies...</h2>;
  }

  return (
    <div className="app-shell">
      <div className="container">
        <div className="header-row">
          <div>
            <p className="eyebrow">React movie app</p>
            <h1>🎬 Movie Manager</h1>
            <p className="subtitle">Browse, add, edit, favorite, and remove movies in one place.</p>
          </div>
          <div className="count-badge">{movies.length} titles</div>
        </div>

        <input
          type="text"
          placeholder="Search movies..."
          className="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Movie title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <select value={genre} onChange={(event) => setGenre(event.target.value)}>
            <option>Sci-Fi</option>
            <option>Drama</option>
            <option>Thriller</option>
            <option>Romance</option>
            <option>Action</option>
          </select>

          <button type="submit">{editingId ? "Update movie" : "Add movie"}</button>
        </form>

        <MovieList
          movies={filteredMovies}
          deleteMovie={deleteMovie}
          editMovie={editMovie}
          toggleFavorite={toggleFavorite}
          rateMovie={rateMovie}
        />
      </div>
    </div>
  );
}

export default App;
