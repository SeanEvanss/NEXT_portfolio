import { getFeedEntry } from "../../lib/redis";

export default async function redisFeed(req, res) {
            
    const feed= await getFeedEntry();
    res.status(200).json({ feed });
    
}