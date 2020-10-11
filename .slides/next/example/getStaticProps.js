// /pages/blog
function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://.../posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
