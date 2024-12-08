import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from 'src/app/api-calling.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit{
  viewAllResp:any=[];
  deletePostResp:any=[];
  dispUpdate:boolean=false;
  viewResp:any;
  rname:any="";
  rcontent:any="";
  rtitle:any="";
  rtags:any="";
  rid:any="";
  deleteDisp:any=false;

  ngOnInit() {
   this.viewAll()
 }
 
   constructor(private apiService:ApiCallingService)
   {} 
 
 
   deletePost(id:any)
   {
 //    this.addPostResp=this.apiCalling.savePost(title,name,tags,post);
 console.log(id);  
 this.deleteDisp=true;
     this.apiService.deletePost(id).subscribe(data=>{
      // this.deletePostResp = data;
      this.deletePostResp="Delete Successfully";
    console.log(data);
   
   },err=>{
     this.deletePostResp =err;
   console.log(err);
   }
   );
   }
   
   viewAll()
   {
 //    this.addPostResp=this.apiCalling.savePost(title,name,tags,post);
 
     this.apiService.viewAllPost().subscribe(data=>{
       this.viewAllResp = data;
   
       console.log(this.viewAllResp);
   
   },err=>{
     this.viewAllResp =err;
   console.log(err);
   }
   );
   } 


   viewOne(id:any)
   {

 //    this.addPostResp=this.apiCalling.savePost(title,name,tags,post);
 
     this.apiService.viewSpecific(id).subscribe(data=>{
       this.viewResp = data;
       
       this.rname=this.viewResp.name;
       this.rcontent=this.viewResp.content;
       this.rtitle=this.viewResp.title;
       this.rtags=this.viewResp.tags;
       this.rid=this.viewResp.id;
       console.log(this.rname);
       console.log(this.rcontent);
       console.log(this.rtitle);
       console.log(this.rtags);
       console.log(this.viewResp);
   this.dispUpdate=true;
   },err=>{
     this.viewAllResp =err;
   console.log(err);
   }
   );
   } 
}