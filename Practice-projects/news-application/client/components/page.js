'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import articles from '../articles';

const getArticles = () => {
  //version of getStaticProps()
  return articles;
};

const Page = () => {
  const router = useRouter();

  const articles = getArticles();

  return (
    <div className='p-4'>
      <div className='text-3xl'>All Articles</div>
      <div className='grid grid-cols-3'>
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
    </div>
  );
};

export default Page;
