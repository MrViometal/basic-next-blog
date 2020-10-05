import React from 'react';
import BlogSnippet from './BlogSnippet';
import Header from './Header/Header';

const MainContentContainer = ({ snippets }) => {
  return (
    <div className='mcc'>
      <ul>
        {snippets.map((blogSnippet, idx) => (
          <li key={idx}>
            <BlogSnippet idx={idx} post={blogSnippet} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainContentContainer;
