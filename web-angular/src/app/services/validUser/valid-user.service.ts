import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ValidUserService {
  authorize = false;

  constructor() {}

  isAuthenticated(user: string, pass: string): boolean {
    this.authorize = user == 'a' && pass == 'b'
    return this.statusLogin();
  }

  statusLogin(): boolean {
    return this.authorize;
  }
}
