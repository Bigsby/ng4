import { Component, OnInit } from '@angular/core';

import { FadeInComponent } from "../_animations/fade-in.animation";

@Component(FadeInComponent("two"))
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
