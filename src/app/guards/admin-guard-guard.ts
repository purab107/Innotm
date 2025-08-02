// src/app/guards/admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(p0: unknown): boolean {
    const isLoggedIn = sessionStorage.getItem('isloggedin') === 'true';
    const isAdmin = sessionStorage.getItem('isAdmin') === 'true';

    if (!isLoggedIn || !isAdmin) {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }
}
