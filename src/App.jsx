import { useState, useEffect } from "react";
import MovieItem from "./movieitem";

function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Sci-Fi");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);


  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleSubmit = () => {
    if (!title) return;

    if (editingId) {
      setMovies(movies.map(m =>
        m.id === editingId ? { ...m, title, genre } : m
      ));
      setEditingId(null);
    } else {
      const newMovie = {
        id: Date.now(),
        title,
        genre,
        favorite: false,
        rating: 0
      };
      setMovies([...movies, newMovie]);
    }

    setTitle("");
    setGenre("Sci-Fi");
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(m => m.id !== id));
  };

  const editMovie = (movie) => {
    setTitle(movie.title);
    setGenre(movie.genre);
    setEditingId(movie.id);
  };

  const toggleFavorite = (id) => {
    setMovies(movies.map(m =>
      m.id === id ? { ...m, favorite: !m.favorite } : m
    ));
  };


  const rateMovie = (id, rating) => {
    setMovies(movies.map(m =>
      m.id === id ? { ...m, rating } : m
    ));
  };

  const filteredMovies = movies.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="loading">Loading movies...</h2>;
  }

  return (
    <div className="container">
      <h1>🎬 Movie Manager</h1>

      <input
        type="text"
        placeholder="Search movies..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="form">
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>Sci-Fi</option>
          <option>Drama</option>
          <option>Thriller</option>
          <option>Romance</option>
          <option>Action</option>
        </select>

        <button onClick={handleSubmit}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {filteredMovies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          deleteMovie={deleteMovie}
          editMovie={editMovie}
          toggleFavorite={toggleFavorite}
          rateMovie={rateMovie}
        />
      ))}
    </div>
  );
}

function App() {
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved ? JSON.parse(saved) : [];
  });

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Sci-Fi");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleSubmit = () => {
    if (!title) return;

    if (editingId) {
      setMovies(movies.map(m =>
        m.id === editingId ? { ...m, title, genre } : m
      ));
      setEditingId(null);
    } else {
      const newMovie = {
        id: Date.now(),
        title,
        genre,
        favorite: false,
        rating: 0
      };
      setMovies([...movies, newMovie]);
    }

    setTitle("");
    setGenre("Sci-Fi");
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(m => m.id !== id));
  };

  const editMovie = (movie) => {
    setTitle(movie.title);
    setGenre(movie.genre);
    setEditingId(movie.id);
  };

  const toggleFavorite = (id) => {
    setMovies(movies.map(m =>
      m.id === id ? { ...m, favorite: !m.favorite } : m
    ));
  };

  const rateMovie = (id, rating) => {
    setMovies(movies.map(m =>
      m.id === id ? { ...m, rating } : m
    ));
  };

  const filteredMovies = movies.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="loading">Loading movies...</h2>;
  }

  return (
    <div className="container">
      <h1>🎬 Movie Manager</h1>

      <input
        type="text"
        placeholder="Search movies..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="form">
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option>Sci-Fi</option>
          <option>Drama</option>
          <option>Thriller</option>
          <option>Romance</option>
          <option>Action</option>
        </select>

        <button onClick={handleSubmit}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {filteredMovies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          deleteMovie={deleteMovie}
          editMovie={editMovie}
          toggleFavorite={toggleFavorite}
          rateMovie={rateMovie}
        />
      ))}
    </div>
  );
}

export default App;
