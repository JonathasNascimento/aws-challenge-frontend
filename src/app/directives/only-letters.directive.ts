import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]',
})
export class OnlyLettersDirective {
  @HostListener('keydown', ['$event']) onKeyUp(event: any) {
    if (/[^a-zA-Z]/g.test(event.key)) {
      event.preventDefault()
    }
  }

  constructor(private el: ElementRef) {}
}
