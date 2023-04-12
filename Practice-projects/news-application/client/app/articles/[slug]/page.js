import { notFound } from 'next/navigation';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineArticle } from 'react-icons/md';
import Axios from 'axios';
import DeleteArticle from '../../../components/DeleteArticle';

const URL = 'http://localhost:3001/newsapp/articles';

async function fetchArticle(slug) {
  try {
    const response = await Axios.get(`${URL}/${slug}`);
    return { data: response.data };
  } catch (error) {
    if (error.response.status === 404) {
      notFound();
    } else {
      console.log(error);
      return {
        status: error.response.status,
        fetchError: error.response.data.error,
      };
    }
  }
}

export default async function Page({ params }) {
  const { slug } = params;

  const article = await fetchArticle(slug);
  // console.log(article);

  return (
    <div className='p-4'>
      <div aria-label='breadcrumb' className='p-4 flex'>
        <Link
          href='/'
          className='text-blue-600 hover:underline flex items-center hover:scale-110 duration-300'
        >
          <AiOutlineHome color='black' size={33} className='p-2' />
          Home
        </Link>
        <div className='flex items-center text-gray-400'>
          <MdOutlineArticle color='grey' size={33} className='p-2' />
          Article
        </div>
      </div>

      {!article.status ? (
        <>
          <div className='text-3xl text-blue-600'>
            Article name:{' '}
            <span className='text-black'>{article.data?.title}</span>
          </div>
          <div className='p-4'>
            <DeleteArticle
              article={article.data?.content}
              slug={slug}
            />
          </div>
        </>
      ) : (
        <div
          className={`${
            article.status
              ? 'm-6 bg-red-200 p-4 rounded-lg text-center text-red-700'
              : 'hidden'
          }`}
        >
          {article.status} {article.fetchError}
        </div>
      )}
    </div>
  );
}

// export async function generateStaticParams() {
//   return articles.map((article) => ({
//     slug: article.slug,
//   }));
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { slug: articles[0].slug } },
//       { params: { slug: articles[1].slug } },
//       { params: { slug: articles[2].slug } },
//     ],
//     fallback: false,
//   };
// }

// export async function generateMetaData({ params }) {
//   const { slug } = params;
//   const article = articles.find((article) => article.slug === slug);

//   if (!article) {
//     return {
//       title: 'Article Not Found.',
//     };
//   }

//   return {
//     title: article.title,
//     description: `The articles title is ${article.title}`,
//   };
// }
