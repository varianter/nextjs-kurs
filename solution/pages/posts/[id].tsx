import React, { useEffect, useState, useMemo } from "react";
import MarkdownIt from "markdown-it";
import { Post } from "src/typings/models";
import style from "./post.module.css";
import { getPostById, getPosts } from "src/api/post";

type PostPageProps = { post: Post };

const PostPage = ({ post }: PostPageProps) => {
  return (
    <section>
      <article>
        <h1>{post.title}</h1>
        <p>{post.author}</p>
        <PostContent content={post.content} />
      </article>
    </section>
  );
};

const PostContent = ({ content }: { content: string }) => {
  const innerHtml = useMemo(() => {
    const md = new MarkdownIt({
      linkify: true,
      html: true,
      typographer: true,
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

export const getStaticPaths = () => {
  const paths = getPosts().map(({ id }) => ({ params: { id } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const post = getPostById(context.params.id.toString());
  return { props: { post }, revalidate: 5 };
};

export default PostPage;
