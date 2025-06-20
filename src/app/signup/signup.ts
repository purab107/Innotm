import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, SignUpModel } from '../my-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  providers: [MyService],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  signUpModel = new SignUpModel();
  Data: any;

  constructor(private Service: MyService, private router: Router) { }

  onSubmit(form: SignUpModel) {
    this.Service.signup(form).subscribe(data => {
      this.Data = data.result
      alert(data.response);
      sessionStorage.setItem("number", this.Data.phoneNumber);
      // After user signs up
      // localStorage.setItem('isLoggedIn', 'true');
      // this.router.navigate(['/dashboard'], { replaceUrl: true });

    });
  }

  // ngOnInit(): void {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn');
  //   if (isLoggedIn && this.router.url === '/login') {
  //     this.router.navigate(['/dashboard']);
  //   }
  // }

}
