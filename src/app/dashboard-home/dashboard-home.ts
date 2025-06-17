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
    this.loadTransactions();
  }

  currentBalance: string = " ";

  transactions: transactionHistory[] = [];

  loadTransactions(){
    this.service.getTransaction(this.userPhoneNumber).subscribe(data=>{
      this.transactions = data.result;
    })
  }

balance(){
  this.service.checkBalance(this.userPhoneNumber).subscribe(data=>{
    this.currentBalance = data.result.amount;
  });
}
}
