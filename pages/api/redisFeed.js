import { getFeedEntry } from "../../lib/redis";

export default async function redisFeed(req, res) {
    try{
        const query= req.query;
        const feed= await getFeedEntry(query);
        res.status(200).json({ feed });
    }catch{
        res.status(500).json({ "message": "Error getting feed" });
    }
}