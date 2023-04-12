'use client';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Page from '../components/page';

const URL = 'http://localhost:3001/newsapp/articles';

//should be server side rendering, like getServerSideProps
async function fetchArticles() {
  try {
    const response = await Axios.get(URL);
    return { data: response.data };
  } catch (error) {
    return {
      fetchError: error.response.data,
      statusCode: error.response.status,
    };
  }
}

export default function page() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getArticles() {
      const articles = await fetchArticles();
      setArticles(articles);
      // console.log(articles);
    }
    getArticles();
  }, []);

  return (
    <div className='p-4'>
      <Page articles={articles} />
    </div>
  );
}
