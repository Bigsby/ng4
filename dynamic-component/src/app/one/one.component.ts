import { Component, OnInit } from '@angular/core';

import { BaseComponent } from "../base-component";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit, BaseComponent {
  name: string = "Component One";

  constructor() { }

  ngOnInit() {
  }

}
