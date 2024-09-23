import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavDirective]'
})
export class NavDirectiveDirective {

  constructor(
    private el: ElementRef
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackGround('#3f51b5');
    this.setColor('#fff');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackGround('#fff');
    this.setColor('#3f51b5');
  }

  setBackGround(color: string) {
    this.el.nativeElement.style.backgroundColor = `${ color }`;
  }

  setColor(color: string) {
    this.el.nativeElement.firstElementChild.style.color = `${ color }`;
  }

}
