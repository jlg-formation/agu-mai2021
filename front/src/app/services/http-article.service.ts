import { ArticleService } from './article.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article instantiated.');
    this.refresh();
  }

  refresh(): void {
    this.http.get<Article[]>('http://localhost:3000/api/articles').subscribe({
      next: (articles) => {
        console.log('articles: ', articles);
        this.articles = articles;
      },
      error: (err) => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
