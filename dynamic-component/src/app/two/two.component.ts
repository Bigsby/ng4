import { Component, OnInit } from '@angular/core';

import { BaseComponent } from "../base-component";

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit, BaseComponent {
  name: string = "Component Two";

  constructor() { }

  ngOnInit() {
  }

}
