import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { article } from 'src/test/data';
import { Article } from '../interfaces/article';

import { HttpArticleService } from './http-article.service';

describe('HttpArticleService', () => {
  let service: HttpArticleService;

  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  });

  it('should be created with error', () => {
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toEqual('GET');
    req.flush('', { status: 404, statusText: 'Not Found' });
    expect(service).toBeTruthy();
  });

  it('should add an article', () => {
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);

    service.add(article);

    const req2 = http.expectOne('/api/articles');
    expect(req2.request.method).toEqual('POST');
    req2.flush('');

    const req3 = http.expectOne('/api/articles');
    expect(req3.request.method).toEqual('GET');
    req3.flush([article]);
    expect(service).toBeTruthy();
  });

  it('should add an article with error', () => {
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);

    service.add(article);

    const req2 = http.expectOne('/api/articles');
    expect(req2.request.method).toEqual('POST');
    req2.flush('', { status: 500, statusText: 'Internal Error' });

    expect(service).toBeTruthy();
  });

  it('should remove an article with error', () => {
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);

    const set = new Set<Article>();
    set.add(article);
    service.remove(set);

    const req2 = http.expectOne('/api/articles');
    expect(req2.request.method).toEqual('DELETE');
    req2.flush('', { status: 500, statusText: 'Internal Error' });

    expect(service).toBeTruthy();
  });

  it('should remove an article', () => {
    const req = http.expectOne('/api/articles');
    expect(req.request.method).toEqual('GET');
    req.flush([]);

    service.remove(new Set());

    const req2 = http.expectOne('/api/articles');
    expect(req2.request.method).toEqual('DELETE');
    req2.flush('', { status: 204, statusText: 'No Content' });

    const req3 = http.expectOne('/api/articles');
    expect(req3.request.method).toEqual('GET');
    req3.flush([article]);

    expect(service).toBeTruthy();
  });
});
