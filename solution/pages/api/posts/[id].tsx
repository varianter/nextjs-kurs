import { getPostById } from "src/api/post";

export default function handler(req,res){
    const post = getPostById(req.params.id)
    res.json(post);
}