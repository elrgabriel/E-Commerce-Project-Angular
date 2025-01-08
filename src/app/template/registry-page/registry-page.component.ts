import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registry-page',
  standalone: false,
  
  templateUrl: './registry-page.component.html',
  styleUrl: './registry-page.component.css'
})
export class RegistryPageComponent {

  formData = {
    nome: '',
    apelido: '',
    email: '',
    re_email: '',
    password: '',
    re_password: '',
    morada: '',
    distrito: '',
    acceptPrivacy: false,
    subscribeNewsletter: false
  };

  constructor(private apiService: ApiService, private router: Router) {
    
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.formData);
      this.sendDataToFunction(this.formData);
    } else {
      console.log('Form is invalid');
    }
  }

  sendDataToFunction(data: any) {
    this.apiService.createUser(data).subscribe(
      (response) => {
        console.log('User created successfully:', response);
        alert('User registered successfully!');
        this.router.navigate(['/login-page'])
      },
      (error) => {
        console.error('Error creating user:', error);
        alert('Error registering user. Please try again.');
      })
    
  }

}
