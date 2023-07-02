import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidUserService } from 'src/app/services/validUser/valid-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private validUserServices: ValidUserService,
    private router: Router
  ) {
    this.username = '';
    this.password = '';
  }

  ngOnInit(): void {}

  Login(): void {
    const result = this.validUserServices.isAuthenticated(
      this.username,
      this.password
    );
    if (result) this.router.navigate(['home']);
    else {
      alert('Acesso negado');
      this.router.navigate(['/']);
    }
  }
}
