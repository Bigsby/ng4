import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";

import { SimpleService } from "../simple.service";

@Component({
    selector: 'app-other',
    templateUrl: './other.component.html',
    styleUrls: ['./other.component.css']
})
export class OtherComponent {
    isUploading = false;
    constructor(private simpleService: SimpleService, private http: Http) { }
    data = "Nothing yet";
    callService(): void {
        this.simpleService.get().then(serviceData => this.data = serviceData);
    }

    fileChange(event) {
        this.isUploading = true;
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];
            let formData: FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers();
            //headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            this.http.post(`api/file/upload`, formData, options).toPromise().then(response => this.isUploading = false);
                //.map(res => res.json())
                ////.catch(error => Observable.throw(error))
                //.subscribe(
                //data => console.log('success'),
                //error => console.log(error)
                //)
        }
    }
}