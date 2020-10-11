export default function handler(req, res) {
  const json = require("./posts.json");
  res.json(json.posts.map(({ id, title }: any) => ({ id, title })));
}
