import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  

  constructor (private router: Router){}

  userPhoneNumber: any;
  ngOnInit():void{
    this.userPhoneNumber = sessionStorage.getItem("number");
  }

  transactions = [
  {
    transactionId: 0,
    userId: 0,
    receiverId: 0,
    receiverName: 'Molly Sanders',
    receiverPhoneNumber: '9876543210',
    transactionType: 'Credit',
    transactionDate: '2025-06-16T19:06:20.155Z',
    initialAmount: 0,
    transferAmount: 20000,
  },
  {
    transactionId: 1,
    userId: 0,
    receiverId: 1,
    receiverName: 'Doug Mann',
    receiverPhoneNumber: '9876543211',
    transactionType: 'Debit',
    transactionDate: '2025-06-10T14:30:00.000Z',
    initialAmount: 0,
    transferAmount: 14200,
  }
];


  addMoney(){
    
  }
}
