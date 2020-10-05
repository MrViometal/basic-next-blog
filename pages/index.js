import useSWR from 'swr';
import Header from '../components/Header/Header';
import MainContentContainer from '../components/MainContentContainer';

import styles from '../styles/Home.module.css';
export const newsApiURL = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-05&sortBy=publishedAt&apiKey=c3bffc473bea462087370971784df641`;

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR(newsApiURL, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <MainContentContainer snippets={data.articles} />
    </>
  );
}
