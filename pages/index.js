import useSWR from 'swr';
import Header from '../components/Header/Header';
import MainContentContainer from '../components/MainContentContainer';

import styles from '../styles/Home.module.css';
export const newsAPI = `https://newsapi.org/v2/everything?q=bitcoin&from=2020-09-05&sortBy=publishedAt&apiKey=c3bffc473bea462087370971784df641`;

export const gnewsAPI = `https://gnews.io/api/v4/search?q=example&token=cf3238e93a5d1c19e116c244ce1b8cfc&lang=en`;

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR(gnewsAPI, fetcher);

  if (error) return <div>Failed to load</div>;
  console.log({ error });
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <MainContentContainer snippets={data.articles} />
    </>
  );
}
