import React from 'react';

export const BlogDecorator = props => {
  const { title, description } = props;

  return (
    <div className="post">
      <p className="post-title">{title}</p>
      <p className="post-message">{description}</p>
    </div>
  );
};
