import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from 'src/app/api-calling.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
 viewAllResp:any=[];
  

 ngOnInit() {
 
  this.viewAll()
}

  constructor(private apiService:ApiCallingService)
  {} 


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
