import { gNewsAPI, newsAPI } from '../index';
import { useRouter } from 'next/router';

const getPost = async postId => {
  const res = await fetch(gNewsAPI).then(res => res.json());
  const post = res.articles[postId];
  console.log(post);
  return post;
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.BlogPost);
  return {
    props: { post },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ padding: '30px' }}>
      <img src={post.image} />
      <h1>{post.title}</h1>
      <h2>By {post.source?.name}</h2>
      <h6>published at {post.publishedAt}</h6>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
