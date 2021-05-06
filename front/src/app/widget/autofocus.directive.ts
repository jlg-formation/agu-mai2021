import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements OnInit, OnChanges {
  @Input() delay: number;

  constructor(private elt: ElementRef<HTMLElement>) {
    console.log('instantiate autofocus');
  }

  ngOnInit(): void {
    console.log('this.delay: ', this.delay);
    this.elt.nativeElement.focus();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes previous: ', changes.delay.previousValue);
    console.log('changes current: ', changes.delay.currentValue);
  }
}
