import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyService, paymentModel } from '../my-service';
import { DashboardHome, } from '../dashboard-home/dashboard-home';

@Component({
  selector: 'app-payment-page',
  imports: [CommonModule, FormsModule],
  providers:[MyService],
  templateUrl: './payment-page.html',
  styleUrl: './payment-page.css'
})
export class PaymentPage {

  userPhoneNumber:any;
  userList:any;
  constructor(private service:MyService){}
  payModel = new paymentModel();

  ngOnInit():void{
    this.userPhoneNumber = sessionStorage.getItem("number");
    this.getallUsers();
  }

  onSendMoney(form: paymentModel) {
      this.payModel.senderPhoneNumber = this.userPhoneNumber;
      this.service.sendMoney(this.payModel).subscribe(data=>{
        alert(data.response);
        console.log(this.payModel);
        
      })
    }

  getallUsers(){
    this.service.getUserList().subscribe(data=>{
      this.userList = data.result;
    })
  }
}
