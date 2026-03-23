import React from 'react';
import { useFavorites } from '../FavoritesContext';

function BookCard({ book }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleFavoriteClick = () => {
    if (isFavorite(book.key)) {
      removeFromFavorites(book.key);
    } else {
      addToFavorites(book);
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">
            <strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'} <br />
            <strong>Subtitle:</strong> {book.subtitle || 'N/A'}
          </p>
          <button
            className={`btn mt-auto ${isFavorite(book.key) ? 'btn-success' : 'btn-primary'}`}
            onClick={handleFavoriteClick}
          >
            {isFavorite(book.key) ? '❤️ Favorited' : '⭐ Favorite'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;