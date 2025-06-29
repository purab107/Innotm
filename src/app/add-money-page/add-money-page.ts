import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addMoneyModel, MyService } from '../my-service';

@Component({
  selector: 'app-add-money-page',
  imports: [CommonModule, FormsModule],
  providers: [MyService],
  templateUrl: './add-money-page.html',
  styleUrl: './add-money-page.css'
})
export class AddMoneyPage {

  constructor (private service : MyService){}

  addMoneyModel = new addMoneyModel();

  userPhoneNumber: any;

  ngOnInit():void{
    this.userPhoneNumber = sessionStorage.getItem("number");
  }

  onAddMoney() {
    this.addMoneyModel.PhoneNumber = this.userPhoneNumber;
    this.addMoneyModel.TransactionType = 'Wallet'; // ✅ Important!

    this.service.addMoney(this.addMoneyModel).subscribe(data => {
      alert(data.response);
    });
  }
}
