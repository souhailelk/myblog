import React from 'react'
import ArticleCard from './ArticleCard'

function Articles(props) {
    const { articles } = props;
    let articleCards = []
    articles.forEach(article => articleCards.push(
      <ArticleCard article={article} />
    ))
    return (
        <div class="flex flex-wrap content-around items-center justify-center">{articleCards}</div>
    )
}

export default Articles;