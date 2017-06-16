import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';

import { Set } from "./models/set";
import { BaseItem } from "./models/base"

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getSets(): Promise<Set[]> {
    return this.http.get("data/sets.json")
      .toPromise()
      .then(response => response.json() as Set[]);
  }

  getSet(id:string): Promise<Set>{
    return this.http.get("data/sets.json")
      .toPromise()
      .then(response => (response.json() as Set[]).find(set => set.id === id));
  }

  getList(collection:string): Promise<any[]>{
    return this.http.get(`data/${collection}.json`)
      .toPromise()
      .then(response => response.json() as any[]);
  }

  getItem(collection:string, id:string): Promise<any>{
    return this.http.get(`data/${collection}.json`)
      .toPromise()
      .then(response => (response.json() as BaseItem[]).find(item => item.id === id));
  }
}
