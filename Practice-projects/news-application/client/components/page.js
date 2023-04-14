import React from 'react';
import Link from 'next/link';
import { TbHandClick } from 'react-icons/tb';

const Page = ({ articles }) => {
  const handlePost = () => {};

  return (
    <div className='p-4'>
      <div className='text-3xl'>All Articles</div>
      <Link href='/post'>
        <button className='m-4 bg-blue-200 px-4 py-2 rounded-lg shadow-lg shadow-gray-400 uppercase text-sm duration-300 hover:scale-110 text-blue-600'>
          Post
        </button>
      </Link>
      <div
        className={`${
          articles.statusCode
            ? 'm-6 bg-red-200 p-4 rounded-lg text-center text-red-700'
            : 'hidden'
        }`}
      >
        {articles.statusCode} {articles.fetchError}
      </div>
      <div className='grid md:grid-cols-3'>
        {articles.data?.map((article) => (
          <div
            key={article.id}
            className='p-6 m-3 rounded-lg shadow-lg shadow-gray-400 cursor-pointer'
          >
            <Link
              href={`/articles/${article.slug}`}
              className='flex justify-end hover:text-blue-700'
            >
              <TbHandClick size={20} className='duration-300 hover:scale-110' />
            </Link>
            <div>{article.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
