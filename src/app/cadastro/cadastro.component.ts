import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  name: string;
  surname: string;
  email: string;
  password: string;
  age: number;
  church: string;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.name, this.surname, this.email, this.password, this.age, this.church).subscribe(response => {
      this.router.navigate(['/auth/login']); // Redireciona para a página de login após cadastro
    }, error => {
      alert('Erro ao registrar');
    });
  }

}
