import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [];

  constructor() {
    this.load();
  }

  save(): void {
    localStorage.setItem('articles', JSON.stringify(this.articles));
  }

  load(): void {
    const str = localStorage.getItem('articles');
    if (!str) {
      this.articles = [];
      return;
    }
    const articles = JSON.parse(str);
    this.articles = articles as Article[];
  }

  add(article: Article): void {
    this.articles.push(article);
    this.save();
  }

  remove(selectedArticles: Set<Article>): void {
    this.articles = this.articles.filter((a) => !selectedArticles.has(a));
    this.save();
  }
}
