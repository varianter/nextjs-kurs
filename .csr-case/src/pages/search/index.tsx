import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Post } from "../../models";

export const Search = () => {
  const params = useLocation();
  const searchQuery = new URLSearchParams(params.search).get("q");

  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setPosts] = useState<Post[]>();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;
    setIsLoaded(false);
    fetch("/api/posts?q=" + encodeURIComponent(searchQuery))
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
  }, [searchQuery]);

  return (
    <section>
      {!isLoaded ? (
        <p>Loading ...</p>
      ) : (
        <>
          {
            <ul>
              {posts?.map((post) => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          }
        </>
      )}
      {isLoaded && error && <p>Got error when fetching posts: {error}</p>}
    </section>
  );
};
