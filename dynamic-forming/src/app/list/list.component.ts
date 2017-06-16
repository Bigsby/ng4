import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

import { ApiService } from "../api.service";
import { Set } from "../models/set";
import { FadeInComponent }  from "../fade-in.component";

@Component(FadeInComponent("list"))
export class ListComponent implements OnInit {
  list: any[];
  set: Set;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.api.getList(params["collection"]))
      .subscribe(list => this.list = list);

    this.route.params
      .switchMap((params: Params) => this.api.getSet(params["collection"]))
      .subscribe(set => this.set = set);
  }

}
