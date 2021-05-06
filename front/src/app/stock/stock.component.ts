import { Article } from 'src/app/interfaces/article';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  selectedArticles: Set<Article> = new Set();
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {}

  toggle(article: Article): void {
    if (this.selectedArticles.has(article)) {
      this.selectedArticles.delete(article);
      return;
    }
    this.selectedArticles.add(article);
  }
}
