import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralapiService {

  constructor(private http: HttpClient) { }

  mypath = "https://jsonplaceholder.typicode.com/posts";

  mygetdata() {
    return this.http.get(this.mypath);
  }

  getsingledata(id: any) {
    return this.http.get(this.mypath + '/' + id);
  }



}
