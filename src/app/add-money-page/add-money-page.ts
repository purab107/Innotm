import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addMoneyModel, MyService } from '../my-service';
import { CustomDialogueComponent } from '../custom-dialogue-component/custom-dialogue-component';

@Component({
  selector: 'app-add-money-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomDialogueComponent],
  providers: [MyService],
  templateUrl: './add-money-page.html',
  styleUrl: './add-money-page.css'
})
export class AddMoneyPage {

  constructor(private service: MyService) {}

  addMoneyModel = new addMoneyModel();
  userPhoneNumber: any;

  showDialog: boolean = false;
  dialogData = {
    title: '',
    message: '',
    type: 'success' as 'success' | 'error'
  };

  ngOnInit(): void {
    this.userPhoneNumber = sessionStorage.getItem("number");
  }

  onAddMoney() {
    this.addMoneyModel.PhoneNumber = this.userPhoneNumber;
    this.addMoneyModel.TransactionType = 'Wallet';

    this.service.addMoney(this.addMoneyModel).subscribe(
      (data) => {
        // Show success dialog
        this.dialogData = {
          title: 'Money Added!',
          message: data.response || 'Amount added successfully to your wallet.',
          type: 'success'
        };
        this.showDialog = true;
      },
      (error) => {
        // Show error dialog
        this.dialogData = {
          title: 'Failed to Add Money',
          message: 'Something went wrong. Please try again.',
          type: 'error'
        };
        this.showDialog = true;
      }
    );
  }
}
