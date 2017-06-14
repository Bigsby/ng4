import { Component, OnInit } from '@angular/core';

import { ModelStateAnimation } from "./_animations/model-state.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations:[
    ModelStateAnimation
  ]
})
export class AppComponent {
  state = "inactive";

  toggleState(){
    this.state = this.state === "active" ? "inactive" : "active";
  }
}
