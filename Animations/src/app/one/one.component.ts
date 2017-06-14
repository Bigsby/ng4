import { Component, OnInit } from '@angular/core';

import { FadeInComponent } from "../_animations/fade-in.animation";

@Component(FadeInComponent("one"))
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
