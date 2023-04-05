'use client';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import Page from '../components/page';

const URL = 'http://localhost:3001/newsapp/articles';

async function fetchArticles() {
  //should be server side rendering, like getServerSideProps
  const response = await Axios.get(URL);
  // console.log(response);
  if (response) {
    return response.data;
  } else {
    throw new Error('Error');
  }
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
