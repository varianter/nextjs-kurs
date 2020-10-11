export default function handler(req, res) {
  const json = require("./posts.json");
  const post = json.posts.find(({ id }) => String(id) === req.query.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post not found");
  }
}
