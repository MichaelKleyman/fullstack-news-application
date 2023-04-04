'use client';
import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineArticle } from 'react-icons/md';
import Axios from 'axios';
import NotFound from './not-found';

const URL = 'http://localhost:3001/newsapp/articles';

async function fetchArticle(slug) {
  try {
    const { data } = await Axios.get(`${URL}/${slug}`);
    if (data.slug !== slug) {
      throw new Error('Data not found');
    }
    return data;
  } catch (error) {
    notFound();
  }
}

const Page = ({ params }) => {
  const [article, setArticle] = useState({});
  const { slug } = params;

  useEffect(() => {
    async function backendCall() {
      const data = await fetchArticle(slug);
      setArticle(data);
    }

    backendCall();
  }, []);

  return (
    <div className='p-4'>
      <Breadcrumbs aria-label='breadcrumb' className='p-4'>
        <Link
          href='/'
          className='text-blue-600 hover:underline flex items-center hover:scale-110 duration-300'
        >
          <AiOutlineHome color='black' size={33} className='p-2' />
          Home
        </Link>
        <div className='flex items-center'>
          <MdOutlineArticle color='grey' size={33} className='p-2' />
          Article
        </div>
      </Breadcrumbs>
      {article.title ? (
        <>
          <div className='text-3xl text-blue-600'>
            Article name: <span className='text-black'>{article.title}</span>
          </div>
          <div className='p-4'>
            <div className='shadow-lg shadow-gray-400 p-4 rounded-lg'>
              {article.content}
            </div>
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Page;

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
