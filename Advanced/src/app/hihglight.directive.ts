import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HihglightDirective {
  constructor(private el: ElementRef) {
  }

  @Input('myHighlight') highlightColor: string;
  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}