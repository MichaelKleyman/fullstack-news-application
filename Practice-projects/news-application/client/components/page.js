'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

// const getArticles = () => {
//   //version of getStaticProps()
//   return articles;
// };

const Page = ({ articles }) => {
  const router = useRouter();

  // const articles = getArticles();

  return (
    <div className='p-4'>
      <div className='text-3xl'>All Articles</div>
      {articles.length ? (
        <div className='grid md:grid-cols-3'>
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => router.push(`/articles/${article.slug}`)}
              className='p-6 m-3 rounded-lg shadow-lg shadow-gray-400 cursor-pointer duration-300 hover:scale-110'
            >
              {article.title}
            </div>
          ))}
        </div>
      ) : (
        <div className='m-8 font-bold tracking-wide font-serif border border-red-400 p-5 text-red-700'>
          <div>Internal Server Error</div>
        </div>
      )}
    </div>
  );
};

export default Page;
