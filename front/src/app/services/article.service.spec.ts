import { article } from './../../test/data';
import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test load without localstorage', () => {
    localStorage.clear();
    service.load();
    expect(service).toBeTruthy();
  });

  it('should test remove with an not empty article list', () => {
    service.articles = [article];
    service.remove(new Set());
    expect(service).toBeTruthy();
  });
});
