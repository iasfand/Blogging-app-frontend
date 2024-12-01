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
  

  ngOnInit() {
  
   this.viewAll()
 }
 
   constructor(private apiService:ApiCallingService)
   {} 
 
 
   deletePost(id:any)
   {
 //    this.addPostResp=this.apiCalling.savePost(title,name,tags,post);
 
     this.apiService.deletePost(id).subscribe(data=>{
       this.deletePostResp = data;
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
}