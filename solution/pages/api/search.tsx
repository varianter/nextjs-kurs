import { searchPosts } from "src/api/post";

export default function handler(req,res) {
    const results = searchPosts(req.params.q)
    res.json(results);
}