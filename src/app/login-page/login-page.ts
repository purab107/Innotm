import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, LoginModel } from '../my-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [MyService],
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.css']
})
export class LoginPage {
  loginModel = new LoginModel();
  Data: any;

  constructor(private Service: MyService, private router: Router) {}

  @Output() loginEvent = new EventEmitter<boolean>();

  send(val: boolean) {
    this.loginEvent.emit(val);
  }

  onSubmit(form: LoginModel) {
    this.Service.loginDetail(form).subscribe({
      next: (data) => {
        this.Data = data.result;
        alert(data.response);

        if (data.response === 'Login successful.') {
          sessionStorage.setItem('isloggedin', 'true');
          sessionStorage.setItem('number', this.Data.phoneNumber);
          sessionStorage.setItem('isAdmin', this.Data.isAdmin);
          sessionStorage.setItem('isMasterAdmin', this.Data.isMasterAdmin || 'false');
          this.send(true);

          // 👇 Redirect based on role
          if (this.Data.isMasterAdmin) {
            this.router.navigate(['/admin']);
          } else if (this.Data.isAdmin) {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/dashboard']);
          }

        } else {
          this.send(false);
        }
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Something went wrong. Please try again.');
        this.send(false);
      }
    });
  }

  onSignClick() {
    this.send(false);
    this.router.navigate(['/signup']);
  }
}
