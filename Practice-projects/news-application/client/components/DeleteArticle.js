'use client';
import React from 'react';
import { BsTrash } from 'react-icons/bs';
import Axios from 'axios';
import { useRouter } from 'next/navigation';

export default function DeleteArticle({ article, slug }) {
  const URL = 'http://localhost:3001/newsapp/articles';
  const router = useRouter();

  async function deleteArticle() {
    try {
      router.push('/');
      await Axios.delete(`${URL}/${slug}`);
    } catch (error) {
      console.log({ deleteError: error });
    }
  }

  return (
    <div className='shadow-lg shadow-gray-400 p-4 rounded-lg'>
      <button
        onClick={deleteArticle}
        className='flex items-center cursor-pointer duration-300 hover:scale-110 hover:text-blue-600 hover:backdrop-blur hover:bg-slate-200 rounded-lg hover:shadow-lg hover:shadow-gray-300 p-1 m-3'
      >
        <BsTrash className='p-2' size={32} />
        Delete
      </button>
      <p>{article}</p>
    </div>
  );
}
