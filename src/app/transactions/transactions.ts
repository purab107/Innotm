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
  constructor(private service: MyService) {}

  searchQuery: string = '';
  filteredTransactions: transactionHistory[] = [];
  transactions: transactionHistory[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 5;

  userPhoneNumber: any;

  ngOnInit(): void {
    this.userPhoneNumber = sessionStorage.getItem("number");
    if (this.userPhoneNumber) {
      this.loadTransactions();
    }
  }

  // Fetch and initialize transactions
  loadTransactions(): void {
    this.service.getTransaction(this.userPhoneNumber).subscribe(data => {
      this.transactions = data.result || [];
      this.filteredTransactions = [...this.transactions];  // Initialize filtered list
      this.filterTransactions();  // Apply filter if any
    });
  }

  // Handle delete all
  deleteAll(): void {
    this.service.deleteAllTransactions(this.userPhoneNumber).subscribe(data => {
      alert(data.response);
      this.loadTransactions();
    });
  }

  // Filter based on search input
  filterTransactions(): void {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      this.filteredTransactions = [...this.transactions];
    } else {
      this.filteredTransactions = this.transactions.filter(t =>
        t.receiverName?.toLowerCase().includes(query) ||
        t.receiverPhoneNumber?.toLowerCase().includes(query) ||
        t.transactionType?.toLowerCase().includes(query)
      );
    }
    this.currentPage = 1;
  }

  // Paginated transactions to display
  paginatedTransactions(): transactionHistory[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredTransactions.slice(start, end);
  }

  totalPages(): number {
    return Math.ceil(this.filteredTransactions.length / this.itemsPerPage) || 1;
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  deleteByID(transactionID: number): void {
    this.service.deleteTransByID(transactionID).subscribe(data => {
      alert(data.response);
      this.loadTransactions();
    });
  }
}
