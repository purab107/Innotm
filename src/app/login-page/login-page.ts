import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, LoginModel } from '../my-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [CommonModule, FormsModule],
  providers: [MyService],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
    loginModel = new LoginModel();
    Data: any;
    
  
    constructor(private Service: MyService, private router: Router){}
  
    onSubmit(form: LoginModel) {
      console.log("submit button pressed");
      sessionStorage.setItem('number', this.loginModel.phoneNumber);
      this.Service.loginDetail(form).subscribe(data=>{
        this.Data = data.result
        alert(data.response);
      //  if(data.response=='Login Successfully !!'){
      //     this.router.navigate(['/dashboard']);
      //  }
       this.router.navigate(['/dashboard']);
         
      });
    }

    // ngOnInit():void{
    //   if(Boolean(sessionStorage.getItem("isloggedin"))){
    //     this.router.navigate(['/dashboard'])
    //   }
    // }

    // @Output() loginEvent = new EventEmitter<string>();

    // send(val:any){
    //   this.loginEvent.emit(val);
    // }

}
