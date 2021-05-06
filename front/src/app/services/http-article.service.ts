import { ArticleService } from './article.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    this.http.get<Article[]>('/api/articles').subscribe({
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

  add(article: Article): void {
    super.add(article);
    this.http.post<void>('/api/articles', article).subscribe({
      next: () => {
        this.refresh();
      },
      error: (err) => {
        console.error('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  remove(selectedArticles: Set<Article>): void {
    super.remove(selectedArticles);
    const ids = [...selectedArticles].map((a) => a.id);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: ids,
    };
    this.http.delete<void>('/api/articles', options).subscribe({
      next: () => {
        this.refresh();
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
