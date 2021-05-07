import { LayoutModule } from './layout/layout.module';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { Routes, Router } from '@angular/router';
import { Location } from '@angular/common';

describe('AppComponent', () => {
  const routes: Routes = [{ path: '', component: HomeComponent }];

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), LayoutModule],
      declarations: [AppComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Gérer efficacement votre stock.'
    );
  });
});
