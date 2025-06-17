// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { LoginPage } from './login-page/login-page';
import { Dashboard } from './dashboard/dashboard';
import { AddMoneyPage } from './add-money-page/add-money-page';
import { PaymentPage } from './payment-page/payment-page';
import { DashboardHome } from './dashboard-home/dashboard-home';

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },

  { path: 'signup', component: Signup },
  { path: 'login', component: LoginPage },

  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', component: DashboardHome },
      { path: 'add-money', component: AddMoneyPage },
      { path: 'send-money', component: PaymentPage }
    ]
  }
];
