import Axios from 'axios';
import Page from '../components/page';

const URL = 'http://localhost:3001/newsapp/articles';

//should be server side rendering, like getServerSideProps
async function fetchArticles() {
  const response = await Axios.get(URL);
  console.log(response);
  if (response) {
    return response.data;
  } else {
    return { error: 'Internal Server Error' };
  }
}

export default async function page() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   async function backendCall() {
  //     const data = await fetchArticles();
  //     if (data) {
  //       setArticles(data);
  //     } else {
  //       console.log('Error');
  //     }
  //   }
  //   backendCall();
  // }, []);
  const articles = await fetchArticles();

  return (
    <div className='p-4'>
      <Page articles={articles} />
    </div>
  );
}
