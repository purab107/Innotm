import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MyService, transactionHistory } from '../my-service';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, FormsModule],
  providers: [MyService],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class Transactions {
  constructor (private service: MyService){}

  userPhoneNumber: any;
  ngOnInit():void{
    this.userPhoneNumber = sessionStorage.getItem("number");
    this.loadTransactions();
  }

  transactions: transactionHistory[] = [];
  
    loadTransactions(){
      this.service.getTransaction(this.userPhoneNumber).subscribe(data=>{
        this.transactions = data.result;
      })
    }

}
