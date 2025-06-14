import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-money-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-money-page.html',
  styleUrl: './add-money-page.css'
})
export class AddMoneyPage {
  onAddMoney() {
    alert('Money added!');
  }
}
