import { Article } from './../../../../back/article';
import { browser, by, element } from 'protractor';

export class StockPage {
  async clickOnAddBtn(): Promise<void> {
    const button = element(by.css('button.pro-add'));
    await button.click();
  }

  async getLastArticle(): Promise<Article> {
    const name = await element(by.css('tbody tr:last-child td.name')).getText();
    const priceStr = await element(
      by.css('tbody tr:last-child td.price')
    ).getText();
    const qtyStr = await element(
      by.css('tbody tr:last-child td.qty')
    ).getText();

    const article: Article = {
      id: 'a12',
      name,
      price: +priceStr.substr(0, -2).replace(',', '.'),
      qty: +qtyStr,
    };

    return article;
  }
}
