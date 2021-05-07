import { browser, by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class AddPage {
  async fillForm(article: Article): Promise<void> {
    const input = element(by.css('input[formcontrolname="name"]'));
    await input.clear();
    await input.sendKeys(article.name);

    const input2 = element(by.css('input[formcontrolname="price"]'));
    await input2.clear();
    await input2.sendKeys(article.price);

    const input3 = element(by.css('input[formcontrolname="qty"]'));
    await input3.clear();
    await input3.sendKeys(article.qty);
  }

  async submitForm(): Promise<void> {
    const button = element(by.css('button'));
    await button.click();
  }
}
