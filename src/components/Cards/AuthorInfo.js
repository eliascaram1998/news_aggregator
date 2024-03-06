import React from 'react';

const AuthorInfo = ({ article, liked }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>
        {article.author ? (
          <>
            {liked && (
              <span>
                <span>By: {article.author}</span>
                <span role="img" aria-label="heart">
                  ❤️
                </span>
              </span>
            )}
            {!liked && <span>By: {article.author}</span>}
          </>
        ) : null}
      </p>
    </div>
  );
};

export default AuthorInfo;
