export const getPostById = (searchId: string) => {
  const json = require("./posts.json");
  return json.posts.find(({ id }) => String(id) === searchId);
};

export const getPosts = () => {
  const json = require("./posts.json");
  return json.posts.map(({ id, title }: any) => ({ id, title }));
};

export const searchPosts = (queryString) => {
  const { posts } = require("./posts.json");
  return posts.filter((post) =>
    Object.values(post).some((val) =>
      String(val).toLowerCase().includes(queryString.toLowerCase())
    )
  );
};
