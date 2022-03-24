import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
})
export class OnlyNumbersDirective {
  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    if (/[^0-9]/g.test(event.key) && event.key.legth == 1) {
      event.preventDefault()
    }
  }

  constructor(private el: ElementRef) {}
}
