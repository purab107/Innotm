import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, transactionHistory } from '../my-service';

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
    this.updatePending();
    this.loadTransactions();
  }

  transactions: transactionHistory[] = [];
  currentBalance: string = " ";

  debitSum: number = 0;
creditSum: number = 0;

updatePending() {
  this.creditSum = 0;
  this.debitSum = 0;

  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].transactionType === 'Credit') {
      this.creditSum += this.transactions[i].transferAmount;
      console.log("credited:", this.creditSum);
    }

    if (this.transactions[i].transactionType === 'Debit') {
      this.debitSum += this.transactions[i].transferAmount;
      console.log("debited : ", this.debitSum);
    }
  }
}

  loadTransactions(){
    this.service.getTransaction(this.userPhoneNumber).subscribe(data=>{
      this.transactions = data.result;
    })
  }

balance(){
  this.service.checkBalance(this.userPhoneNumber).subscribe(data=>{
    this.currentBalance = data.result.amount;
  });
  this.updatePending();
}
}
