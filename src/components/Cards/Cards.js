import React from 'react';
import { defaultImage } from 'utils/utils.js';
import AuthorInfo from './AuthorInfo';
import LikeButton from 'components/Buttons/LikeButton';
import useLikedState from 'hooks/useLikedState';
import './Cards.css';

const Cards = ({ article, type }) => {
  const { likedAuthor, handleLikeClickAuthor } = useLikedState(article, 'author');
  const { likedSource, handleLikeClickSource } = useLikedState(article, 'source');

  return (
    <div className="NewsCard">
      <NewsCardImage article={article} />
      <NewsCardTitle title={type === 'guardian' ? article.webTitle : article.title} />
      <AuthorInfo article={article} liked={likedAuthor} />
      <LikeButton type="author" item={article.author} liked={likedAuthor} handleLikeClick={handleLikeClickAuthor} />
      {type !== 'guardian' ? (
        <>
          <NewsCardSource source={article.source.name} />
          <LikeButton type="source" item={article.source.name} liked={likedSource} handleLikeClick={handleLikeClickSource} />
        </>) : null}
      <NewsCardLink url={article.url} />
    </div>
  );
};

const NewsCardImage = ({ article }) => (
  <img src={article.urlToImage || defaultImage} alt={article.title} />
);

const NewsCardTitle = ({ title }) => <h2>{title}</h2>;

const NewsCardSource = ({ source }) => <p><strong>{source}</strong></p>;

const NewsCardLink = ({ url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    See more...
  </a>
);

export default Cards;