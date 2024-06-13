import Article from "../models/Article";
import IArticlesRepository from "./IArticlesRepository";
import axios from 'axios';

class ArticlesRepository implements IArticlesRepository {
  private uri:string = 'https://trueback.vercel.app';
  async getAllArticles(): Promise<Article[]> {
    console.log("hheerrrre")
    const val = await axios.get(this.uri)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.error(error)
      });

    const articles: Article[] = [];
    val.forEach((element: { id: string; title: string; content: React.JSX.Element; date: Date; }) => {
      articles.push(new Article(element.id, element.title, element.content, element.date, []))
    });
   return articles;
  }
  async getArticleById(id:string): Promise<Article> {
    const val = await axios.get(this.uri+"Article/"+id)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.error(error)
      });
    return val;
  }

}
export default ArticlesRepository;