import { Route, BrowserRouter, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard'
import Article from '../models/Article';
import ArticleComponent from '../components/Article';
import ArticlesRepository from "../repositories/ArticlesRepository";
async function GetArticles() :Promise<Article[]> {

  let repository = new ArticlesRepository();
  return await repository.getAllArticles();
}



function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("Affsdfs")
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await GetArticles();
        setArticles(response);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  //const articles: Article[] = await GetArticles();
  console.log("element fetched"+articles)
  let articleCards: React.JSX.Element[] = []
  console.log(articles)
  articles.forEach(article => articleCards.push(
    <ArticleCard article={article} />
  ))


  let ArticlesRoutes: React.JSX.Element[] = []
  articles.forEach(article => ArticlesRoutes.push(
    <Route path={"/Article/" + article.id}>
      <ArticleComponent />
    </Route>
  ))
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {ArticlesRoutes}
        </Switch>
      </BrowserRouter>
      {articleCards}
    </div>
  )
}

export default Articles;