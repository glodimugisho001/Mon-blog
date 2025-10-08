import React,{Suspense} from 'react'
import Posts from './Posts';

export default function PostsWrapper() {
  return (
    <Suspense fallback={<div>Chargement des articles...</div>}>
      <Posts />
    </Suspense>
  );
}