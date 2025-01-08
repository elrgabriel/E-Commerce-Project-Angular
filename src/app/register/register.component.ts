import { Component } from '@angular/core';
import { UserService } from '../services/user.service'; // Caminho para o serviço
import { Router } from '@angular/router'; // Para navegação após o registro
import { FormsModule } from '@angular/forms'; // Importando FormsModule

@Component({
  selector: 'app-register',
  standalone: true,  // Marca o componente como standalone
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],  // Se necessário, inclua o arquivo de estilo
  imports: [FormsModule] // Importa o FormsModule diretamente no componente
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
    nome: '',
    apelido: '',
    morada: '',
    distrito: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  onRegister() {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('Usuário registrado com sucesso', response);
        this.router.navigate(['/profile']); // Redireciona para o perfil após o registro
      },
      error => {
        console.error('Erro no registro', error);
      }
    );
  }
}
