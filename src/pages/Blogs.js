import React, { useState } from 'react';
import '../styles/Blogs.css';
import { BlogDecorator } from './BlogDecorator';

function Blogs() {
  const [posts, setPosts] = useState([
    {
      id: '1',
      title: 'Title 1',
      description: 'This is my first post!',
    },
    {
      id: '2',
      title: 'Title 2',
      description: 'This is my first post!',
    },
    {
      id: '3',
      title: 'Title 3',
      description: 'This is my first post!',
    },
    {
      id: '4',
      title: 'Title 4',
      description: 'This is my first post!',
    },
  ]);

  return (
    <div className="blog">
      <h1>Blogs</h1>
      {posts.map((post, index) => (
        <BlogDecorator
          key={index}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
}

export default Blogs;
