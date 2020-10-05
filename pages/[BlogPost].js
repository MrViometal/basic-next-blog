import React, { useState, useEffect } from 'react';
import { gnewsAPI } from './index';
import { useRouter } from 'next/router';
import useSWR from 'swr';
// import { Context } from '../utils/context';

const fetcher = async url => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

const BlogPost = () => {
  const [post, setPost] = useState({});
  const { query } = useRouter();
  const { data, error } = useSWR(
    () => query.BlogPost && `${gnewsAPI}`,
    fetcher,
  );
  useEffect(() => {
    const postWanted = data?.articles[query.BlogPost];
    setPost(postWanted);
  }, [data]);

  return (
    <div style={{ padding: '30px' }}>
      {post && (
        <>
          <h1>{post.title}</h1>
          <h2>By {post.author}</h2>
          <h6>published at {post.publishedAt}</h6>
          <p>{post.content}</p>
        </>
      )}
    </div>
  );
};

export default BlogPost;
