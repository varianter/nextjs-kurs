export default function handler(req, res) {
  const { posts } = require("./posts.json");
  res.json(
    posts.filter((post) =>
      Object.values(post).some((val) =>
        String(val).toLowerCase().includes(req.query.q.toLowerCase())
      )
    )
  );
}
