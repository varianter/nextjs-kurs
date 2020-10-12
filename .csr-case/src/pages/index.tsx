import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../models";
import style from "./index.module.css";

export const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          const postRes = result as Post[];
          setPosts(postRes);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <section>
      {!isLoaded ? <p>Loading ...</p> : <PostLinks posts={posts} />}
      {isLoaded && error && <p>Got error when fetching posts: {error}</p>}
    </section>
  );
};

interface PostLinksProps {
  posts: Post[];
}

const PostLinks = ({ posts }: PostLinksProps) => {
  return (
    <>
      <p>Read one of our posts:</p>
      <ul className={style.postlist}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
