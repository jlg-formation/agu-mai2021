import { article } from './../../src/test/data';
import { browser, logging } from 'protractor';
import { AppPage } from './po/app.po';
import { StockPage } from './po/stock.po';
import { AddPage } from './po/add.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let stockPage: StockPage;
  let addPage: AddPage;

  beforeEach(() => {
    page = new AppPage();
    stockPage = new StockPage();
    addPage = new AddPage();
  });

  it('should add an article', async () => {
    await page.navigateTo();
    await page.clickOnSeeStockBtn();
    await stockPage.clickOnAddBtn();
    await addPage.fillForm(article);
    await addPage.submitForm();
    const a = await stockPage.getLastArticle();
    expect(a.name).toEqual(article.name);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
