import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import 'rxjs/add/operator/switchMap';

import { ApiService } from "../api.service";
import { Set } from "../models/set";
import { FadeInComponent }  from "../fade-in.component";

@Component(FadeInComponent("form"))
export class FormComponent implements OnInit {
  item: any;
  set: Set;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  FieldType = {
    "text": "text",
    "textarea": "textarea",
    "password": "password",
    "number": "number",
    "checkbox": "checkbox",
    "file": "file"
  };

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.api.getItem(params["collection"], params["id"]))
      .subscribe(item => this.item = item);

    this.route.params
      .switchMap((params: Params) => this.api.getSet(params["collection"]))
      .subscribe(set => this.set = set);
  }

  onSubmit(){
    alert("submitting");
  }
}
