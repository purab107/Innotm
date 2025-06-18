import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MyService, transactionHistory } from '../my-service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-transactions',
  imports: [CommonModule, FormsModule, TableModule],
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

  deleteAll(){
    this.service.deleteAllTransactions(this.userPhoneNumber).subscribe(data=>{
      alert(data.response)
      this.loadTransactions();
    })
  }  

  deleteByID(transactionID: number){
    this.service.deleteTransByID(transactionID).subscribe(data=>{
      alert(data.response);
      this.loadTransactions();
    })
  }
    loadTransactions(){
      this.service.getTransaction(this.userPhoneNumber).subscribe(data=>{
        this.transactions = data.result;
      })
    }

}
