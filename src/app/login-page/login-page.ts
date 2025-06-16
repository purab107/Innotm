import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, LoginModel } from '../my-service';

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
    
  
    constructor(private Service: MyService){}
  
    onSubmit(form: LoginModel) {
      console.log("submit button pressed");
      this.Service.loginDetail(form).subscribe(data=>{
        this.Data = data.result
        alert(data.response);
      });
    }

}
