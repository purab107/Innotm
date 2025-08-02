// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { LoginPage } from './login-page/login-page';
import { Dashboard } from './dashboard/dashboard';
import { AddMoneyPage } from './add-money-page/add-money-page';
import { PaymentPage } from './payment-page/payment-page';
import { DashboardHome } from './dashboard-home/dashboard-home';
import { Transactions } from './transactions/transactions';
import { NoAuthGuard } from './guards/no-auth-guard';
import { AuthGuard } from './guards/auth-guard';
import { AdminGuard } from './guards/admin-guard-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'signup', component: Signup, canActivate: [NoAuthGuard] },
  { path: 'login', component: LoginPage, canActivate: [NoAuthGuard] },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardHome },
      { path: 'add-money', component: AddMoneyPage },
      { path: 'send-money', component: PaymentPage },
      { path: 'transaction-page', component: Transactions }
    ]
  },

  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () =>
      import('./admin/admin-module').then(m => m.AdminModule)
  },

  { path: '**', redirectTo: 'login' }
];
