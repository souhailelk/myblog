import React from 'react'


function ArticleCard(props){
    const { article } = props;
    const tags = []
    article.tags.forEach(tag => 
        tags.push(<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>));
    return( 
    <div class=" max-w-sm rounded overflow-hidden shadow-lg">
        <a href="#">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{article.title}</div>
                <div class="flex text-xs tracking-widest break-words">{article.date}</div>
            </div>
        </a>
        <div class="px-6 py-4">{tags}</div>
    </div>
    )
}

export default ArticleCard;