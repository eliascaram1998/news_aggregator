import React from 'react';

const LikeButton = ({ type, item, handleLikeClick, liked }) => {
  return (
    <div>
      {item ? (
        <button
          className={`likeButton ${liked ? 'liked' : ''}`}
          onClick={() => handleLikeClick(type, item)}
        >
          {liked ? `Remove ${type} from favorites` : `Add ${type} to favorites`}
        </button>
      ) : null}
    </div>
  );
};

export default LikeButton;
