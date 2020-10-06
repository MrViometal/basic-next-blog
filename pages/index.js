import MainContentContainer from '../components/MainContentContainer';

export const newsAPI = `https://newsapi.org/v2/everything?q=bitcoin&from=2020-09-05&sortBy=publishedAt&apiKey=c3bffc473bea462087370971784df641`;

export const gNewsAPI = `https://gnews.io/api/v4/search?q=example&token=04bbf244f2a1e6e51743f62fd2c0ccab&lang=en`;

async function getPosts() {
  const res = await fetch(gNewsAPI).then(res => res.json());
  const articles = res.articles;
  return articles;
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

const Index = ({ posts }) => {
  return (
    <>
      <MainContentContainer snippets={posts} />
    </>
  );
};

export default Index;
