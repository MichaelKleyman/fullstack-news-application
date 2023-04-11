'use client';
import React, { useState } from 'react';
import PageForm from '../../components/PostForm';

export default function page() {
  const [post, setPost] = useState({ title: '', slug: '', content: '' });

  return (
    <div className='p-4'>
      <PageForm postObj={post} setPost={setPost} />
    </div>
  );
}
