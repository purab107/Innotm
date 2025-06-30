import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, transactionHistory, WalletResponseModel,  } from '../my-service';

@Component({
  selector: 'app-dashboard-home',
  imports: [CommonModule, FormsModule],
  providers: [MyService],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css'
})
export class DashboardHome {


constructor (private service: MyService){}

userPhoneNumber: any;
  ngOnInit():void{
    this.userPhoneNumber = sessionStorage.getItem("number");
    this.balance();
    this.loadTransactions();
  }

  transactions: transactionHistory[] = [];
  currentBalance: number = 0;
  totalSpent: number = 0;
  totalReceived: number = 0;



  loadTransactions(){
    this.service.getTransaction(this.userPhoneNumber).subscribe(data=>{
      this.transactions = data.result;
      console.log(data.result)
    })
  }

balance() {
  this.service.checkBalance(this.userPhoneNumber).subscribe((data: WalletResponseModel) => {
    this.currentBalance = data.result.amount;
    this.totalSpent = data.result.totalSpent;
    this.totalReceived = data.result.totalReceived;

    console.log("Current Balance:", this.currentBalance);
    console.log("Total Sent:", this.totalSpent);
    console.log("Total Received:", this.totalReceived);
  });
}
}
