import React from 'react';
import Link from 'next/link';

const BlogSnippet = ({ post, onClick, idx }) => {
  return (
    <Link href={`/${encodeURIComponent(idx)}`}>
      <div className='blog-snippet' onClick={onClick}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </Link>
  );
};

export default BlogSnippet;
