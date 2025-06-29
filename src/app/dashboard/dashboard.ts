import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MyService, UserInfoModel} from '../my-service';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  providers: [MyService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  constructor(private router: Router, private service: MyService) { }

  @Output() loginEvent = new EventEmitter<string>();

  userPhoneNumber: any;
  username: string = '';
  ngOnInit(): void {
    this.userPhoneNumber = sessionStorage.getItem("number");
    console.log("Stored phone number:", this.userPhoneNumber);
    this.service.getUsername(this.userPhoneNumber).subscribe((res: { result: UserInfoModel }) => {
      this.username = res.result.userName;
      this.showConsole();

    });
  }

  logout() {
    sessionStorage.removeItem('number');
    sessionStorage.removeItem('isloggedin');
    this.router.navigate(['/login']);
    this.send(false);
  }

  send(val: any) {
    this.loginEvent.emit(val);
  }

  showConsole() {
    console.log("user name is : ", this.username)
  }


}
