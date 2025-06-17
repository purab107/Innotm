import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MyService, balanceCheckModel } from '../my-service';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  providers: [MyService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(private router: Router, private service: MyService) { }

  userPhoneNumber: any;
  username: string = '';
  ngOnInit(): void {
    this.userPhoneNumber = sessionStorage.getItem("number");
    //const phone = sessionStorage.getItem('number');
    this.service.getUsername(this.userPhoneNumber).subscribe((res: { result: balanceCheckModel }) => {
      this.username = res.result.username;
      this.showConsole();
    });

  }

  showConsole() {
    console.log("user name is : ", this.username)
  }



}
