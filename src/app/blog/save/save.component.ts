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
    successDisp:any=false;
    ngOnInit() {

  }
  constructor(private apiService:ApiCallingService)
  {} 

addPost(title:any,name:any,tags:any,post:any)
  {
    this.successDisp=true;
//    this.addPostResp=this.apiCalling.savePost(title,name,tags,post);

    this.apiService.savePost(this.randomIntFromInterval(10000,99999),title,name,tags,post).subscribe(data=>{
    //  this.addPostResp = JSON.stringify(data);
    this.addPostResp='Success';
   console.log(this.addPostResp);
  
  },err=>{
    this.addPostResp =err;
  console.log(err);
  }
  );
  }  


  
randomIntFromInterval(min:any, max:any) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
}
