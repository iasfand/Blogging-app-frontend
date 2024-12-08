import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from 'src/app/api-calling.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
 viewAllResp:any=[];
 rname:any="";
 rcontent:any="";
 rtitle:any="";
 rtags:any="";
 rid:any="";
 rdate_time:any="";
 viewResp:any;

 isDisp:boolean=false;
 ngOnInit() {
 
  this.viewAll()
}

  constructor(private apiService:ApiCallingService)
  {} 


  viewAll()
  {
  //  this.isOneDisp=false;
 //   this.isAllDisp=true;
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
      this.rdate_time==this.viewResp.date_time;
      console.log(this.rname);
      console.log(this.rcontent);
      console.log(this.rtitle);
      console.log(this.rtags);
      console.log(this.viewResp);
    
      this.isDisp=true;
  },err=>{
    this.viewAllResp =err;
  console.log(err);
  }
  );
  } 
  
  

}
