import { getRedisFeed } from "../../lib/redis";

//This function will be used to get all feed entries from the redis database.
export default async function handler(req, res) {
            
    const feed= await getRedisFeed();
    //console.log("OK - feed: ", feed);
    res.status(200).json({ feed });
    
}