'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import articles from '../../../articles';
import { notFound } from 'next/navigation';
// import getArticle from '../../../lib/getArticle';

export async function generateMetaData({ params }) {
  const { slug } = params;
  // const article = getArticle(slug);
  const article = articles.find((article) => article.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found.',
    };
  }

  return {
    title: article.title,
    description: `The articles title is ${article.title}`,
  };
}

// const getArticle = () => {
//   //version of getStaticProps(), for static website/info
//   return articles[0];
// };

const Page = ({ params }) => {
  // const [article, setArticle] = useState('');

  const { slug } = params;
  const router = useRouter();
  const article = articles.find((article) => article.slug === slug);

  // useEffect(() => {
  //   async function fetchArticle() {
  //     const theArticle = await getArticle(slug);
  //     console.log(theArticle);
  //     setArticle(theArticle);
  //   }
  //   fetchArticle();
  // }, []);

  if (!article) {
    return notFound();
  }

  return (
    <div className='p-4'>
      <div
        onClick={() => router.push('/')}
        className='p-4 cursor-pointer hover:font-bold'
      >
        Go back
      </div>
      <div className='text-3xl'>Article name: {article.title}</div>
      <div className='p-4'>
        <div className='shadow-lg shadow-gray-400 p-4 rounded-lg'>
          {article.content}
        </div>
      </div>
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

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
