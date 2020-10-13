import { getPosts } from "src/api/post";

export default function handler (req, res) {
    const posts = getPosts();
    res.json(posts)
}