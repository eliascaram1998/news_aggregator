import { useState, useEffect } from 'react';
import favoritesService from 'services/favoritesServices';

const useLikedState = (article) => {
  const [likedAuthor, setLikedAuthor] = useState(false);
  const [likedSource, setLikedSource] = useState(false);

  const handleLikeClick = (type, key) => {
    const updatedPreferences = type === 'author'
      ? favoritesService.toggleFavoriteAuthor(key)
      : favoritesService.toggleFavoriteSource(key);

    type === 'author' ? setLikedAuthor(updatedPreferences[key].liked) : setLikedSource(updatedPreferences[key].liked);
  };

  useEffect(() => {
    const authorPreferences = favoritesService.getFavoriteAuthors();
    const sourcePreferences = favoritesService.getFavoriteSources();

    const setLikedState = (type, key) => {
      const preferences = type === 'author' ? authorPreferences : sourcePreferences;
      const preference = preferences[key] || { liked: false };
      type === 'author' ? setLikedAuthor(preference.liked) : setLikedSource(preference.liked);
    };

    setLikedState('author', article.author);
    setLikedState('source', article.source.name);
  }, [article]);

  return { likedAuthor, handleLikeClickAuthor: () => handleLikeClick('author', article.author), likedSource, handleLikeClickSource: () => handleLikeClick('source', article.source.name) };
};

export default useLikedState;
