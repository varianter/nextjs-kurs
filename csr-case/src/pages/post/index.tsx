import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import MarkdownIt from "markdown-it";
import { Post } from "../../models";
import style from "./post.module.css";

export const PostPage = () => {
  const { id } = useParams();

  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState<Post>();
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/posts/" + id)
      .then((res) => res.json())
      .then(
        (result) => {
          const postRes = result as Post;
          setPost(postRes);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);
  return (
    <section>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        post && (
          <article>
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <PostContent content={post.content} />
          </article>
        )
      )}
      {isLoaded && error && <p>Got error when fetching posts: {error}</p>}
    </section>
  );
};

const PostContent = ({ content }: { content: string }) => {
  const innerHtml = useMemo(() => {
    const md = new MarkdownIt({
      linkify: true,
      html: true,
      typographer: true
    });
    return { __html: md.render(content) };
  }, [content]);
  return (
    <article
      className={style.article}
      dangerouslySetInnerHTML={innerHtml}
    ></article>
  );
};
