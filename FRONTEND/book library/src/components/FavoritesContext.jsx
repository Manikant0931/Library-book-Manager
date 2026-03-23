import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteBooks');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favoriteBooks', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (book) => {
    setFavorites(prev => {
      // Check if book is already in favorites (using key or title as identifier)
      const isAlreadyFavorite = prev.some(fav => fav.key === book.key);
      if (!isAlreadyFavorite) {
        return [...prev, book];
      }
      return prev;
    });
  };

  const removeFromFavorites = (bookKey) => {
    setFavorites(prev => prev.filter(book => book.key !== bookKey));
  };

  const isFavorite = (bookKey) => {
    return favorites.some(book => book.key === bookKey);
  };

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};