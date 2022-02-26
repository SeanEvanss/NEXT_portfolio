import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();
const url= process.env.REDIS_URL;

async function connect() {    
    if (!client.isOpen()) {
        await client.open(url);
        console.log("Connected");

    }
}

class feedEntry extends Entity{}
let schema = new Schema(
    feedEntry,
    {
      title: { type: 'string' },
      image: { type: 'string' },
      content: { type: 'string', textSearch: true },
    },
    {
      dataStructure: 'JSON',
    }
);

export async function createFeedEntry(data){
    await connect();
    
    const repository = new Repository(schema, client);
    const car= repository.createEntity(data);
    const id= await repository.save(car);
    return id;
}


export async function getFeedEntry(query){
  await connect();
  const repository = new Repository(schema, client);
  const feedEntries= await repository.search().return.all();
  return feedEntries;
}