import { Component, OnInit } from '@angular/core';
import { MyService } from '../../my-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [FormsModule, CommonModule],
  providers: [MyService],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit {
  allUsers: any[] = [];
  filteredUsers: any[] = [];
  roleFilter = 'All';

  counts = {
    total: 0,
    admin: 0,
    general: 0,
    master: 0
  };

  constructor(private service: MyService, private router: Router) {}

  ngOnInit() {
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    this.service.getAllUsers().subscribe({
      next: (data) => {
        this.allUsers = data.result;
        this.filteredUsers = this.allUsers;
        this.calculateCounts();
      },
      error: (err) => console.error(err)
    });
  }

  calculateCounts() {
    this.counts.total = this.allUsers.length;
    this.counts.admin = this.allUsers.filter(u => u.isAdmin && !u.isMasterAdmin).length;
    this.counts.master = this.allUsers.filter(u => u.isMasterAdmin).length;
    this.counts.general = this.allUsers.filter(u => !u.isAdmin && !u.isMasterAdmin).length;
  }

  filterByRole(role: string) {
    this.roleFilter = role;
    if (role === 'All') {
      this.filteredUsers = this.allUsers;
    } else if (role === 'Admin') {
      this.filteredUsers = this.allUsers.filter(u => u.isAdmin && !u.isMasterAdmin);
    } else if (role === 'Master') {
      this.filteredUsers = this.allUsers.filter(u => u.isMasterAdmin);
    } else {
      this.filteredUsers = this.allUsers.filter(u => !u.isAdmin && !u.isMasterAdmin);
    }
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
