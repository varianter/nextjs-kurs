import React, { useEffect, useState } from "react";
import Link from "next/link";
import style from "./index.module.css";
import { getPosts } from "src/api/post";

const PostLinks = ({ posts }) => {
  return (
    <>
      <p>Read one of our posts:</p>
      <ul className={style.postlist}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// export const getStaticProps = async (context) => {
//   const respose = await fetch("http://localhost:3000/api/posts");
//   const posts = await respose.json();
//   return {
//     props: { posts },
//     revalidate: 5,
//   };
// };

// Since getStaticProps is server function we don't need to go to via REST
// we can ask the function directly
export const getStaticProps = () => {
  const posts = getPosts();
  return {
    props: { posts },
    revalidate: 5,
  };
};

export default PostLinks;
