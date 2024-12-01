import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {
  constructor(private http: HttpClient) { }


  savePost(title:any,name:any,tags:any,post:any):Observable<any>
  {
   /* let body = new URLSearchParams();
    body.set('from',from);
    body.set('to',to);
    body.set('text',from_text);  */
    const body = { 
      "id":"32432",
      "title": title,
      "name": name,
      "tags": tags,
      "content": post,
      "date_time": "POST Request Example" 
    };
    console.log(body);

    let url="http://54.171.232.115:8080/save"; 
    return this.http.post<any>(url,body);
  }


  viewAllPost():Observable<any>
  {


    let url="http://54.171.232.115:8080/allblogs"; 
    return this.http.get<any[]>(url);
  }


  viewSpecific(id:any):Observable<any>
  {
    let url="http://54.171.232.115:8080/show/"+id; 
    return this.http.get<any[]>(url);
  }


  updatePost(id:any,title:any,name:any,tags:any,content:any):Observable<any>
  {
  
    const body = {
    "id":id,
    "date":"date",
    "name":name,
    "content":content,
    "tags":tags,
    "title":title
    };
    console.log(body);
    let url="http://54.171.232.115:8080/update"; 
    return this.http.post<any[]>(url,body);
  }

  deletePost(id:any):Observable<any>
  {
    console.log(id);
    let url="http://54.171.232.115:8080/delete/"+id; 
    return this.http.get<any[]>(url);
  }
}
