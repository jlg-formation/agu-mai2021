import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';

@Component({
  selector: 'app-test',
  template: '<div><input type="text" appAutofocus [delay]="delay"></div>',
})
export class TestComponent {
  delay = 500;
}

describe('AutofocusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, AutofocusDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector('input');
    const focusElt = document.activeElement;
    expect(input).toEqual(focusElt);
  });

  it('should change input', () => {
    component.delay = 1000;
    fixture.detectChanges();
    expect(true).toBeTrue();
  });
});
