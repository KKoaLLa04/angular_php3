import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CategorySerivces {
    private URL_API = "localhost:8000"
    constructor(private http: HttpClient) { }

    getDataCategory(){
        return this.http.get(`${this.URL_API}/users`);
    }

}