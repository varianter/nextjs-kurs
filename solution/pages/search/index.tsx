import React from "react";
import Link from "next/link";
import { searchPosts } from "src/api/post";

export default function Search({ posts }) {
  return (
    <section>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const getServerSideProps = async (req, _res) => {
  const { q } = req.query;

  const posts = searchPosts(q);
  return {
    props: {
      posts: posts ?? [],
    },
  };
};
