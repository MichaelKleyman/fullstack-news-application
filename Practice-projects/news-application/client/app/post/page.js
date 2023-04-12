'use client';
import React, { useState } from 'react';
import PageForm from '../../components/PostForm';

export default function page() {
  const [post, setPost] = useState({ title: '', slug: '', content: '' });
  const [error, setError] = useState(null);

  return (
    <div className='p-4'>
      <PageForm
        postObj={post}
        setPost={setPost}
        error={error}
        setError={setError}
      />
    </div>
  );
}
