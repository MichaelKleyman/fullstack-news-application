import React from 'react';
import Link from 'next/link';

const Page = ({ articles }) => {
  return (
    <div className='p-4'>
      <div className='text-3xl'>All Articles</div>
      <div
        className={`${
          articles.code
            ? 'm-6 bg-red-200 p-4 rounded-lg text-center text-red-700'
            : 'hidden'
        }`}
      >
        {articles.code} {articles.fetchError}
      </div>
      <div className='grid md:grid-cols-3'>
        {articles.data?.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className='p-6 m-3 rounded-lg shadow-lg shadow-gray-400 cursor-pointer duration-300 hover:scale-110'
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
