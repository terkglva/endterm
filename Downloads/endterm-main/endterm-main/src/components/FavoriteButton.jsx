// src/components/FavoriteButton.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../context/AuthContext';
import { addFavorite, removeFavorite } from '../features/favoritesSlice';

const FavoriteButton = ({ itemId }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const favorites = useSelector((state) => state.favorites.items);

  const isFavorite = favorites.includes(itemId);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavorite({ userId: user?.uid, itemId }));
    } else {
      dispatch(addFavorite({ userId: user?.uid, itemId }));
    }
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    padding: '5px',
  };

  return (
    <button
      onClick={handleClick}
      style={buttonStyle}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
      title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
};

export default FavoriteButton;