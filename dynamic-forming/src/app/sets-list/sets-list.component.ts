import { Component, OnInit } from '@angular/core';

import { ApiService } from "../api.service";
import { Set } from "../models/set";
import { FadeInComponent }  from "../fade-in.component";

@Component(FadeInComponent("sets-list"))
export class SetsListComponent implements OnInit {
  sets: Set[];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getSets().then(sets => this.sets = sets);
  }

}
