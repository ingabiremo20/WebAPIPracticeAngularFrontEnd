import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
baseUrl: string='https://localhost:44382/api/posts/'
  constructor(private http: HttpClient) { }

  //getdata from database
  getAll(){
return this.http.get(this.baseUrl);
  }
}
