import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallingService } from 'src/app/api-calling.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  saveUserResp:any;
  validateUserResp:any;

  loginDisp:boolean=false;
  saveDisp:boolean=false;
  ngOnInit() {
  }

  constructor(private router:Router,private apiService:ApiCallingService)
  {} 

saveUser(username:any,email:any,password:any,password2:any)
{
  if(password!=password2)
  {
    this.saveUserResp="Confirm password doesn't match";
  }
  else{
   let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
   const lengthOfCode = 40;
   this.makeRandom(lengthOfCode, possible);
   this.apiService.saveUser(this.makeRandom(lengthOfCode, possible),username,email,password).subscribe(data=>{
    // this.deletePostResp = data;
    this.saveDisp=true;
    //this.saveUserResp="Register Successfully";
    this.saveUserResp=JSON.stringify(data.response);
   console.log(this.saveUserResp);
   },err=>{
   this.saveUserResp =err;
  console.log(err);
  }
  );
 }
}


validateUser(username:any,password:any)
{

    this.apiService.validateUser(username,password).subscribe(data=>{
      // this.deletePostResp = data;
      this.loginDisp=true;
      if(JSON.stringify(data)==null)
      {
        this.validateUserResp="Invalid login";
      }
      else
      {this.validateUserResp="Login Successfully";
      this.router.navigate(['/home']);
      }
      console.log(data);
   
   },err=>{
     this.validateUserResp =err;
   console.log(err);
   }
   );
}

makeRandom(lengthOfCode: number, possible: string) {
  let text = "";
  for (let i = 0; i < lengthOfCode; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
    return text;
}

}
