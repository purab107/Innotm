import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signup } from "./signup/signup";
import { LoginPage } from "./login-page/login-page";
import { AddMoneyPage } from "./add-money-page/add-money-page";
import { PaymentPage } from "./payment-page/payment-page";
import { Dashboard } from "./dashboard/dashboard";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signup, LoginPage, AddMoneyPage, PaymentPage, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Innotm';
  // isloggedin=false;
  // ngOnInit():void{
  //   this.isloggedin = Boolean(sessionStorage.getItem('isloggedin'))
  // }

  // received(event:any){
  //   this.isloggedin = event;
  // }
}
