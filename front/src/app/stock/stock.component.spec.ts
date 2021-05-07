import { WidgetModule } from './../widget/widget.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockComponent } from './stock.component';
import { article } from 'src/test/data';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetModule],
      declarations: [StockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle', () => {
    component.toggle(article);
    component.toggle(article);
    expect(component).toBeTruthy();
  });

  it('should remove', () => {
    component.remove();
    expect(component).toBeTruthy();
  });
});
