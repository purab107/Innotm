import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, paymentModel } from '../my-service';
import { DashboardHome } from '../dashboard-home/dashboard-home';
import { CustomDialogueComponent } from '../custom-dialogue-component/custom-dialogue-component';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomDialogueComponent], // ✅ ADD CUSTOM DIALOG
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

  // ✅ Dialog State
  showDialog: boolean = false;
  dialogData = {
    title: '',
    message: '',
    type: 'success' as 'success' | 'error'
  };

  constructor(private service: MyService) {}

  ngOnInit(): void {
    this.userPhoneNumber = sessionStorage.getItem("number");
    this.getallUsers();
  }

  // ✅ Handles money transfer with dialog feedback
  onSendMoney() {
    this.payModel.SenderPhoneNumber = this.userPhoneNumber;
    this.service.sendMoney(this.payModel).subscribe(
      data => {
        this.dialogData = {
          title: 'Payment Sent!',
          message: data.response || 'Money transferred successfully.',
          type: 'success'
        };
        this.showDialog = true;
        console.log(this.payModel);
      },
      error => {
        this.dialogData = {
          title: 'Payment Failed',
          message: 'Something went wrong. Please try again.',
          type: 'error'
        };
        this.showDialog = true;
      }
    );
  }

  // 🔄 User search and dropdown
  getallUsers() {
    this.service.getUserList().subscribe(data => {
      this.userList = data.result || [];
      this.filteredUsers = this.userList;
    });
  }

  filterUsers() {
    const query = this.payModel.ReceiverPhoneNumber?.toLowerCase() || '';
    this.filteredUsers = this.userList.filter(user =>
      user.username.toLowerCase().includes(query) ||
      user.phoneNumber.includes(query)
    );
  }

  selectUser(phoneNumber: string) {
    this.payModel.ReceiverPhoneNumber = phoneNumber;
    this.showDropdown = false;
  }

  hideDropdownWithDelay() {
    setTimeout(() => {
      this.showDropdown = false;
    }, 150);
  }
}
