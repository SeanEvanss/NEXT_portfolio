import { Client, Entity, Schema, Repository } from 'redis-om';
import { createClient } from 'redis';

const client = new Client();
const url= process.env.REDIS_URL;

async function connect() {    
    if (!client.isOpen()) {        
        await client.open(url, {'return_buffers': true});
        console.log("Connected");
    }
}

class feedEntry extends Entity{}
let schema = new Schema(
    feedEntry,
    {
      title: { type: 'string' },
      image: { type: 'string' },
      content: { type: 'string' },
      date: { type: 'string' },
    }
);

export async function createIndex(){
  await connect();
  const repository = new Repository(schema, client);
  await repository.createIndex();
}

export async function createRedisFeed(){
  await connect();
  let feedEntryRepository= client.fetchRepository(schema);
  
  let currDate= new Date();
  let currFeedEntry= feedEntryRepository.createEntity();
  currFeedEntry.title= "post3";
  currFeedEntry.image= "/background.jpeg",
  currFeedEntry.content= "Some content about this page";
  currFeedEntry.date= currDate.getDate() + "-" + (currDate.getMonth()+1) + "-" + currDate.getFullYear() +
    " " + currDate.getHours() + ":" + currDate.getMinutes() + ":" + currDate.getSeconds();
    
  const id= await feedEntryRepository.save(currFeedEntry);

  //const feedEntries= await repository.fetch("ReplyError: feedEntry:index: no such index");
  return id;
}

export async function getRedisFeed(){
  await connect();
  let feedEntryRepository= client.fetchRepository(schema);
  const feedEntries= await feedEntryRepository.search().return.all();
  //console.log(feedEntries);
  client.close();
  return feedEntries;
}