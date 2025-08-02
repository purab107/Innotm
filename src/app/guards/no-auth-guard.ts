// src/app/guards/no-auth-guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = sessionStorage.getItem('isloggedin') === 'true';
    
    if (isLoggedIn) {
      // User is already logged in, redirect to dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }

    // User is NOT logged in, allow route
    return true;
  }
}
