import React from 'react'

function Article(props) {
    const { article } = props;
    const tags = []
    article.tags.forEach(tag =>
        tags.push(<span class="inline-block bg-gray-200 rounded-full px-3 py-1 sm:text-xs md:text-sm font-semibold text-gray-700 mr-2">#{tag}</span>));
    return (

        <div className="flex justify-center overflow-hidden rounded">
            <div className="w-screen min-h-screen box-content max-w-screen-lg shadow-lg px-6 py-4 m-2">
                <div class="font-bold justify-center sm:text-xl md:text-3xl break-words">{article.title}</div>
                <div class="flex sm:text-sm md:text-lg tracking-widest break-words">published on {article.date}</div>
                <div class="text-gray-700 sm:text-xs md:text-base leading-relaxed text-justify break-words sm:px-3 sm:py-2 md:px-6 md:py-4">{article.content}</div>
                <div class="px-6 py-4">{tags}</div>
            </div>
        </div>
    )
}

export default Article;