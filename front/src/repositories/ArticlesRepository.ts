import Article from "../models/Article";
import IArticlesRepository from "./IArticlesRepository";
import axios from 'axios';

class ArticlesRepository implements IArticlesRepository {
  async getAllArticles(): Promise<Article[]> {
    console.log("hheerrrre")
    const val = await axios.get('https://trueback-4vxx9xo2t-souhailelks-projects.vercel.app/')
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.error('----IMM--->' + error);
      });

    const articles: Article[] = [];
    val.forEach((element: { id: string; title: string; content: React.JSX.Element; date: Date; }) => {
      articles.push(new Article(element.id, element.title, element.content, element.date, []))
    });
   return articles;
  }

}
export default ArticlesRepository;