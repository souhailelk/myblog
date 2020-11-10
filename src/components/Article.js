import React from 'react'

function Article(props) {
    const { article } = props;
    const tags = []
    article.tags.forEach(tag =>
        tags.push(<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-gray-700 mr-2">#{tag}</span>));
    return (

        <div className="flex justify-center overflow-hidden rounded">
            <div className="w-screen min-h-screen box-content max-w-screen-lg shadow-lg px-6 py-4">
                <div class="font-bold justify-center text-2xl mm:text-4xl break-words">{article.title}</div>
                <div class="flex text-sm md:text-lg tracking-widest break-words ml-3 mb-3">published on {article.date}</div>
                <div class="text-gray-700 text-xs md:text-base leading-relaxed text-justify font-mono break-words px-2 py-6">{article.content}</div>
                <div class="px-6 py-4">{tags}</div>
            </div>
        </div>
    )
}

export default Article;