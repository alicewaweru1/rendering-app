function MovieItem({ movie, deleteMovie, editMovie, toggleFavorite, rateMovie }) {
  return (
    <div className="movie-card">
      <div>
        <h3>
          {movie.title} {movie.favorite && "⭐"}
        </h3>
        <p>{movie.genre}</p>

        <div className="stars">
          {[1,2,3,4,5].map(star => (
            <span
              key={star}
              onClick={() => rateMovie(movie.id, star)}
              className={movie.rating >= star ? "filled" : ""}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <div className="actions">
        <button onClick={() => toggleFavorite(movie.id)}>Fav</button>
        <button onClick={() => editMovie(movie)}>Edit</button>
        <button onClick={() => deleteMovie(movie.id)}>Remove</button>
      </div>
    </div>
  );
}

export default MovieItem;