import { Component, OnInit, ElementRef, HostBinding } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'dialog',
  template: '<div class="dialog"><div class="dialog-body"><ng-content></ng-content></div></div><div class="dialog-background"></div>',
  styleUrls: ['./dialog.component.less'],
  animations: [ trigger('fadeInAnimation', [
        state("close",
            style({ opacity: 0 })
        ),
        state("open",
            style({ opacity: 1 })
        ),
        transition("close => open", animate('.3s', style({ opacity: 1 }))),
        transition("open => close", animate('.3s', style({ opacity: 0 })))
    ])],
  host: { '[@fadeInAnimation]': 'close' }
})
export class DialogComponent implements OnInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = "close";

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  open(){
    this.el.nativeElement.style.display = "block";
    this.fadeInAnimation = "open";
  }

  close(){
    this.fadeInAnimation = "close";
    setTimeout(()  => this.el.nativeElement.style.display = "none", (300));
  }
}