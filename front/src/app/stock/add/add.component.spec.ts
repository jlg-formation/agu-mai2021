import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', () => {
    component.submit();
    expect(component).toBeTruthy();
  });

  it('should setTimeout', () => {
    const origSetTimeout = setTimeout;
    // tslint:disable-next-line: ban-types
    (window as any).setTimeout = (callback: Function, delay: number) => {
      callback();
    };
    component.ngOnInit();
    (window as any).setTimeout = origSetTimeout;
    expect(component).toBeTruthy();
  });
});
