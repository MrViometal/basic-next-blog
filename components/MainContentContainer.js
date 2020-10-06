import BlogSnippet from './BlogSnippet';

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
