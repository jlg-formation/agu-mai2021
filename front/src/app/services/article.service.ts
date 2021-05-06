import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles = [
    {
      name: 'Tournevis',
      price: 2.99,
      qty: 123,
    },
    {
      name: 'Tournevis cruciforme',
      price: 3.45,
      qty: 12,
    },
    {
      name: 'Tondeuse à gazon',
      price: 150,
      qty: 20,
    },
    {
      name: 'Marteau',
      price: 3.67,
      qty: 300,
    },
  ];

  constructor() {}

  add(article: Article): void {
    this.articles.push(article);
  }
}
