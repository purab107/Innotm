import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  signupModel = {
    Email: '',
    Phone: '',
    Gender: '',
    Username: '',
    Password: ''
  };

  onSubmit() {
    console.log(this.signupModel);
    alert(this.signupModel);
    // Add your API call or further logic here
  }
}
