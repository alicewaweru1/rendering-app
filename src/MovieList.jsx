import MovieItem from "./movieitem";

function MovieList({ movies, deleteMovie, editMovie, toggleFavorite, rateMovie }) {
  if (!movies.length) {
    return <div className="empty-state">No movies match your search yet. Add one above to get started.</div>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
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

export default MovieList;
