import React from 'react'


function Article(props){
    const { content } = props;
    return(
        <div className="flex justify-center overflow-hidden rounded">
        <div className="w-screen min-h-screen box-content max-w-screen-lg shadow-lg px-6 py-4 m-10">
            <div class="font-bold justify-center text-3xl  break-words">{content.title}</div>
            <div class="flex text-lg tracking-widest break-words">{content.infos}</div>
            <div class="text-gray-700 text-base leading-relaxed break-words px-6 py-4">{content.content}</div>
        </div>
        </div>
    )
}

export default Article;