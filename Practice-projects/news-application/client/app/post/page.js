import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { MdCreate } from 'react-icons/md';

export default function page() {
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
          <MdCreate color='grey' size={33} className='p-2' />
          Post
        </div>
      </div>
      <div className='p-5 shadow-lg shadow-gray-700 w-full'>
        <div className='m-6'>
          <label className='mr-3 tracking-wider text-blue-600'>Title:</label>
          <input
            type='text'
            placeholder='Title of the article...'
            className='shadow-lg shadow-gray-300 rounded-lg p-2 w-2/4'
          />
        </div>
        <div className='m-6'>
          <label className='mr-3 tracking-wider text-blue-600'>Slug:</label>
          <input
            type='text'
            placeholder='Slug for the article...'
            className='shadow-lg shadow-gray-300 rounded-lg p-2 w-2/4'
          />
        </div>
        <div className='m-6'>
          <div>
            <label className='tracking-wider text-blue-600'>Content:</label>
          </div>
          <textarea
            rows='12'
            cols='93'
            placeholder='Content for the article...'
            className='shadow-lg shadow-gray-300 rounded-lg p-2'
          ></textarea>
        </div>
        <div className='m-6'>
          <button className='bg-blue-200 px-4 py-2 rounded-lg shadow-lg shadow-gray-400 uppercase text-sm duration-300 hover:scale-110 text-blue-600'>
            Complete Post
          </button>
        </div>
      </div>
    </div>
  );
}
