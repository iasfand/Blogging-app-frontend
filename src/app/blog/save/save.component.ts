import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallingService } from 'src/app/api-calling.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit{
    addPostResp:any;

    ngOnInit() {

  }
  constructor(private apiService:ApiCallingService)
  {} 

addPost(title:any,name:any,tags:any,post:any)
  {
//    this.addPostResp=this.apiCalling.savePost(title,name,tags,post);

    this.apiService.savePost(title,name,tags,post).subscribe(data=>{
      this.addPostResp = data;
   console.log(data);
  
  },err=>{
    this.addPostResp =err;
  console.log(err);
  }
  );
  }  
}
