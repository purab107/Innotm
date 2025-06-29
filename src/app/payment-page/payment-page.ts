import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, paymentModel } from '../my-service';
import { DashboardHome } from '../dashboard-home/dashboard-home';

@Component({
  selector: 'app-payment-page',
  imports: [CommonModule, FormsModule],
  providers: [MyService],
  templateUrl: './payment-page.html',
  styleUrl: './payment-page.css'
})
export class PaymentPage {
  userPhoneNumber: any;
  userList: any[] = [];
  filteredUsers: any[] = [];

  showDropdown: boolean = false;
  payModel = new paymentModel();

  constructor(private service: MyService) {}

  ngOnInit(): void {
    this.userPhoneNumber = sessionStorage.getItem("number");
    this.getallUsers();
  }

  // Handles form submission
  onSendMoney() {
    this.payModel.SenderPhoneNumber = this.userPhoneNumber;
  this.service.sendMoney(this.payModel).subscribe(data => {
    alert(data.response);
    console.log(this.payModel);
  });
  }

  // Fetch users from the backend
  getallUsers() {
    this.service.getUserList().subscribe(data => {
      this.userList = data.result || [];
      this.filteredUsers = this.userList;
    });
  }

  // Filters users based on input
  filterUsers() {
    const query = this.payModel.ReceiverPhoneNumber?.toLowerCase() || '';
    this.filteredUsers = this.userList.filter(user =>
      user.username.toLowerCase().includes(query) ||
      user.phoneNumber.includes(query)
    );
  }

  // Selects a user and closes dropdown
  selectUser(phoneNumber: string) {
    this.payModel.ReceiverPhoneNumber = phoneNumber;
    this.showDropdown = false;
  }

  // Delayed hiding to support mousedown selection
  hideDropdownWithDelay() {
    setTimeout(() => {
      this.showDropdown = false;
    }, 150);
  }
}
