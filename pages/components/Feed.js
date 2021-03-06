import React, { Component, useEffect, useState } from 'react'
import { feedCards } from '../../data/data.js';
import Navbar from './Navbar.js';

export default function Feed() {
    const data = null;
    const [loaded, setLoaded] = useState(false);
    const [feedData, setFeedData] = useState();
    //Function that allows us to use end of lines in our text for formatting.
    function NewLineText(props) {
        const text = props.text;
        const lines = text.split('\n').map(line => <p>{line}</p>);
        return lines;
    }

    const getFeed = async (e) => {
        const response = await fetch("/api/getRedisFeed");
        //console.log(response);
        data = await response.json();
        setFeedData(data);
        console.log("FEED- ", data);
        console.log("length ", Object.keys(data.feed[0]).length);
        

        data.feed.forEach(element => {
            console.log(element.title);
            console.log(element.date);
            console.log(element.content);
        });
        setLoaded(true);
    }

    useEffect(() => {
        getFeed();
    }, []);

    return (
        <section id="feed" >
            <Navbar />
            <div id="landing_div" className="flex flex-col justify-center items-center mx-auto">
                <h1 className='text-pure_white p-10'>
                    This is the Feed Page<br />
                    work in progress...
                </h1>
                <div className="flex flex-wrap md:w-1/2 w-2/3">

                    {loaded && feedData.feed.map(card => (
                        <div className='relative h-50 bg-pure_white p-8 rounded-md mb-10'>
                            <h1 className='text-custom_orange text-xl font-bold'>
                                {card.title}
                            </h1>
                            <h2 className='text-custom_gray text-sm font-bold pb-5'>
                                {card.date}
                            </h2>
                            <text className="leading-relaxed text-pure_black md:text-base">
                                <NewLineText text={card.content} />
                            </text>
                        </div>

                    ))}


                    {/*
                    feedCards.map((card) => (
                        <div key={card.title}  className='relative h-50 bg-pure_white p-8 rounded-md mb-10'>                        
                            <h1 className='text-custom_orange text-xl font-bold'>
                                {card.title}
                            </h1>
                            <h2 className='text-custom_gray text-sm font-bold pb-5'>
                                {card.upload_time}
                            </h2>
                            <img src={card.image} className='rounded-md mb-5'/>
                            <text className="leading-relaxed text-pure_black md:text-base">
                                <NewLineText text={card.description}/>
                            </text>
                            
                        </div>
                        ))
                    */}
                </div>

            </div>
        </section>
    )



}
