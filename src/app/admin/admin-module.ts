import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { Users } from './users/users';
import { AdminGuard } from '../guards/admin-guard-guard';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboard,
    canActivate: [AdminGuard]
  },
  {
    path: 'users',
    component: Users,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdminDashboard,
    Users
  ]
})
export class AdminModule { }
