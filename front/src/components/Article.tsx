import React from 'react'

import ArticleModel from '../models/Article'
import { useParams } from 'react-router-dom'

function GetArticle(id:string) {
    const content:React.JSX.Element = <p>{id}From Elecrow. I have two of their first CrowPi device and I use them in demonstrations and talks all the time, especially when talking to students.
      They have a Kickstarter ending this week for the new CrowPi2. It's an update of the original CrowPi which was basically a Raspberry Pi in a tiny suitcase...instead the CrowPi2 looks like a laptop! The magical part is that the full exploration and sensor board is hidden underneath a wireless keyboard with trackpad, held on with magnets!
      The CrowPi folks sent me an early CrowPi2 because I was a vocal supporter of the previous version, so I did a LIVE video unboxing on twitter as well as a follow up software video on the CrowPi2. I am not being paid for this review and I always am honest with y'all about the stuff I like. I plan on buying a few for my kids' public school science class.</p>
    const title = "Reviewing the Elecrow CrowPi2 Raspberry Pi Laptop and STEM Education Platform"
    const date = new Date(11);
    const tags = ["photography", "other", "other", "other", "other"]
    return new ArticleModel(id, title, content, date, tags)
  }



function Article() {
    type ArticleParam = {id:string};
      
    const {id} = useParams<ArticleParam>();
    console.log("I got the ID:"+id)
    const article = GetArticle(id);
    const tags:React.JSX.Element[] = []
    article.tags.forEach(tag =>
        tags.push(<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2 mt-3">#{tag}</span>));
    return (

        <div className="flex justify-center overflow-hidden rounded">
            <div className="box-content max-w-screen-lg shadow-lg px-6 py-4 overflow-auto">
                <img alt="Article" className="object-cover h-1/2 w-full" src="https://picsum.photos/600/400/?random" />
                <div className="font-bold justify-center text-2xl mm:text-4xl break-words">{article.title}</div>
                <div className="text-sm md:text-lg tracking-widest break-words ml-3 mb-3">published on {article.date.toString()}</div>
                <div className="text-gray-700 text-xs md:text-base leading-relaxed text-justify font-mono break-words px-2 py-6">{article.content}</div>
                <div className="px-6 py-4">{tags}</div>
            </div>
        </div>
    )
}

export default Article;