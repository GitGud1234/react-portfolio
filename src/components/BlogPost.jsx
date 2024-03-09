import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BlogPost = ({ id, title, description }) => {
  const navigate = useNavigate();
  return (
    <div
      className="post"
      onClick={() => {
        navigate('/blogs/' + { id });
      }}
    >
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
