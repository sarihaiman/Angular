import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[opacity]'
})
export class OpacityDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.element.nativeElement.style.opacity = '85%';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.element.nativeElement.style.opacity = '100%';
  }
}
