'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import articles from '../../../articles';
import { notFound } from 'next/navigation';

const getArticle = () => {
  //version of getStaticProps(), for static website/info
  return articles[0];
};

const Page = ({ params }) => {
  const { slug } = params;
  const router = useRouter();

  const article = getArticle();

  return (
    <div className='p-4'>
      <div
        onClick={() => router.push('/')}
        className='p-4 cursor-pointer hover:font-bold'
      >
        Go back
      </div>
      <div className='text-3xl'>Article name: {slug}</div>
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
