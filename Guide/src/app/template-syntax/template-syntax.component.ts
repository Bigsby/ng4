import { Component, OnInit } from '@angular/core';

class Model {
  value: string;
}
@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html'
})
export class TemplateSyntaxComponent {
  value = 0;
  constructor() { }

  add() {
    this.value++;
  }

  inputValue = "";

  bindingValue = "";

  fontSizePx = 20;
  model = new Model();

  strings: string[] = [
    "first",
    "second",
    "third"
  ];

  trackString(index, s): number { return index }
}