import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]',
})
export class OnlyLettersDirective {
  @HostListener('keydown', ['$event']) onKeyUp(event: any) {}

  constructor(private el: ElementRef) {}
}
