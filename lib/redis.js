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

export async function createIndex(){
  await connect();
  const repository = new Repository(schema, client);
  await repository.createIndex();
}

export async function getFeedEntry(){
  await connect();
  const repository = new Repository(schema, client);

  let currFeedEntry;
  currFeedEntry= repository.createEntity();
  currFeedEntry.title= "What's this page about";
  currFeedEntry.image= "/background.jpeg";
  currFeedEntry.content= "Some content about this page";

  const newFeed= repository.createEntity(currFeedEntry);
  const id= await repository.save(newFeed);

  //const feedEntries= await repository.fetch("ReplyError: feedEntry:index: no such index");
  return id;
}