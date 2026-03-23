import React from 'react';
import { useFavorites } from '../FavoritesContext';
import BookCard from './BookCard';

export default function FavoriteBooks() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="container mt-4">
      <h2>Favorite Books</h2>
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <div className="row">
          {favorites.map((book, index) => (
            <BookCard key={book.key || index} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}
