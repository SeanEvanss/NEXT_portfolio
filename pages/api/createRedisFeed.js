import { createRedisFeed } from "../../lib/redis";

//This endpoint will be used to create a new feed entry in the redis database.
export default async function handler(req, res) {
            
    const feed= await createRedisFeed();
    res.status(200).json({ feed });
    
}