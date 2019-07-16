import { NewsComponent } from './news.component';
import { NewsService } from '../news.service';

describe('Testing NewsComponent', () => {
    const newsService = new NewsService();
    const newsComponent = new NewsComponent(newsService);

    it('get articles should return articles', () => {
        expect(newsComponent.articles.toString()).toBe(newsService.getArticles().toString());
    });
});
