import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from 'src/app/api-calling.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  viewAllResp:any=[];
  updatePostResp:any;
  viewResp:any;
rname:any="";
rcontent:any="";
rtitle:any="";
rtags:any="";
rid:any="";
dispUpdate:boolean=false;

  ngOnInit() {
 
    this.viewAll()
  }
  
    constructor(private apiService:ApiCallingService)
    {} 
  
    updatePost(id:any,title:any,name:any,tags:any,post:any)
    {
  //    this.addPostResp=this.apiCalling.savePost(title,name,tags,post);
  
      this.apiService.updatePost(id,title,name,tags,post).subscribe(data=>{
        this.updatePostResp = data;
     console.log(data);
    
    },err=>{
      this.updatePostResp =err;
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


    updateContent(id:any,ftitle:any,fname:any,ftags:any,fcontent:any)
    {
      console.log(id);
      console.log(ftitle);
      console.log(fname);
      console.log(ftags);
      console.log(fcontent);
      this.apiService.updatePost(id,ftitle,fname,ftags,fcontent).subscribe(data=>{
        this.viewAllResp = data;
    
        console.log(this.viewAllResp);
    
    },err=>{
      this.viewAllResp =err;
    console.log(err);
    }
    );
    }
}