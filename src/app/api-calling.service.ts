import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {
  constructor(private http: HttpClient) { }


  savePost(id:any,title:any,name:any,tags:any,post:any):Observable<any>
  {
    const currentDate = new Date();	
   /* let body = new URLSearchParams();
    body.set('from',from);
    body.set('to',to);
    body.set('text',from_text);  */
    const body = { 
      "id":id,
      "title": title,
      "name": name,
      "tags": tags,
      "content": post,
      "date_time": currentDate 
    };
    console.log(body);

    let url="http://54.171.232.115:8081/save"; 
    return this.http.post<any>(url,body);
  }


  viewAllPost():Observable<any>
  {


    let url="http://54.171.232.115:8081/allblogs"; 
    return this.http.get<any[]>(url);
  }


  viewSpecific(id:any):Observable<any>
  {
    let url="http://54.171.232.115:8081/show/"+id; 
    return this.http.get<any[]>(url);
  }


  updatePost(id:any,title:any,name:any,tags:any,content:any):Observable<any>
  {
    const currentDate = new Date();	
    const body = {
    "id":id,
    "date":currentDate,
    "name":name,
    "content":content,
    "tags":tags,
    "title":title
    };
    console.log(body);
    let url="http://54.171.232.115:8081/update"; 
    return this.http.post<any[]>(url,body);
  }

  deletePost(id:any):Observable<any>
  {
    console.log(id);
    let url="http://54.171.232.115:8081/delete/"+id; 
    return this.http.get<any[]>(url);
  }


  saveUser(id:any,email:any,username:any,password:any):Observable<any>
  {
  
    const body = {
      "id":id,
      "username":username,
      "email":email,
      "password":password
    };
    console.log(body);
    let url="http://54.171.232.115:8081/saveUser"; 
    return this.http.post<any[]>(url,body);
  }

  validateUser(username:any,password:any):Observable<any>
  {
  
    const body = {
    "username":username,
    "password":password
    };
    console.log(body);
    let url="http://54.171.232.115:8081/validate"; 
    return this.http.post<any[]>(url,body);
  }
}
