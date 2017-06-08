import { Component, OnInit } from '@angular/core';
import { SimpleService } from "../simple.service";

@Component({
    selector: 'app-other',
    templateUrl: './other.component.html',
    styleUrls: ['./other.component.css']
})
export class OtherComponent {

    constructor(private simpleService: SimpleService) { }
    data = "Nothing yet";
    callService(): void {
        this.simpleService.get().then(serviceData => this.data = serviceData);
    }
}