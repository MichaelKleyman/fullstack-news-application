'use client';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import Page from '../components/page';

const URL = 'http://localhost:3001/newsapp/articles';

async function fetchArticles() {
  const { data } = await Axios.get(URL);
  return data;
}

const page = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function backendCall() {
      const data = await fetchArticles();
      setArticles(data);
    }
    backendCall();
  }, []);

  return (
    <div className='p-4'>
      <Page articles={articles} />
    </div>
  );
};

export default page;
