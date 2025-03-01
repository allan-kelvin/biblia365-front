import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(response => {
      localStorage.setItem('token', response.access_token); // Armazena o token no localStorage
      this.router.navigate(['/home']); // Redireciona para a página inicial após login
    }, error => {
      alert('Erro ao fazer login');
    });
  }
}
