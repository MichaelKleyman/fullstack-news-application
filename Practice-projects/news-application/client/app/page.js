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

export default async function page() {
  const articles = await fetchArticles();
  // console.log(articles);

  return (
    <div className='p-4'>
      <Page articles={articles} />
    </div>
  );
}
