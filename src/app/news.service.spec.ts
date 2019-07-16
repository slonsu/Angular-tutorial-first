import { NewsService } from './news.service';
import { dataBase } from './dbArticle';

describe('Testing NewsService', () => {
  let newsService;

  beforeEach(() => {
    newsService = new NewsService();
  });

  it('getArticles should return values from database', () => {
    expect(newsService.getArticles().toString()).toEqual(dataBase.toString());
  });

  it('getArticleById should return a value by id', () => {
    const articleId = dataBase[0].id;
    expect(newsService.getArticleById(articleId).toString()).toEqual(dataBase[0].toString());
  });
});
