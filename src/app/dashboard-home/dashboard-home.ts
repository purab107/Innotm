import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, transactionHistory, WalletResponseModel } from '../my-service';

@Component({
  standalone: true,
  selector: 'app-dashboard-home',
  imports: [CommonModule, FormsModule],
  providers: [MyService],
  templateUrl: './dashboard-home.html',
  styleUrls: ['./dashboard-home.css']
})
export class DashboardHome {

  constructor(private service: MyService) {}

  userPhoneNumber: any;
  transactions: transactionHistory[] = [];
  currentBalance: number = 0;
  totalSpent: number = 0;
  totalReceived: number = 0;

  ngOnInit(): void {
    this.userPhoneNumber = sessionStorage.getItem("number");
    this.balance();
    this.loadTransactions();
  }

  loadTransactions() {
    this.service.getTransaction(this.userPhoneNumber).subscribe(data => {
      this.transactions = data.result || [];
      console.log(data.result);
    });
  }

  balance() {
    this.service.checkBalance(this.userPhoneNumber).subscribe((data: WalletResponseModel) => {
      if (data.result) {
        this.currentBalance = data.result.amount;
        this.totalSpent = data.result.totalSpent;
        this.totalReceived = data.result.totalReceived;
      } else {
        this.currentBalance = 0;
        this.totalSpent = 0;
        this.totalReceived = 0;
        console.warn("Balance response missing:", data);
      }
    });
  }
}
