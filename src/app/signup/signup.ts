import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, SignUpModel } from '../my-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  providers: [MyService],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {

  signUpModel = new SignUpModel();
  Data: any;

  constructor(private Service: MyService, private router: Router) {}

  onSubmit(form: SignUpModel) {
    this.Service.signup(form).subscribe({
      next: (data) => {
        this.Data = data.result;
        alert(data.response);

        if (this.Data && this.Data.phoneNumber) {
  sessionStorage.setItem('isloggedin', 'true');
  sessionStorage.setItem('number', this.Data.phoneNumber);
  this.router.navigate(['/dashboard']); // user dashboard
} else {
  alert("Signup response missing phone number.");
}

      },
      error: (err) => {
        console.error('Signup error:', err);
        alert('Something went wrong. Please try again.');
      }
    });
  }
}
