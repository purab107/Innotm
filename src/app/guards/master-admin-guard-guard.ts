// src/app/guards/master-admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MasterAdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isMaster = sessionStorage.getItem('isMasterAdmin') === 'true';
    return isMaster;
  }
}
