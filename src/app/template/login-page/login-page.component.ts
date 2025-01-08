import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,
  
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  formData = {
    email: '',
    password:''
  }

  constructor(private apiService: ApiService, private router: Router) { }
  

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.formData);
      this.logInUser(this.formData);
    } else {
      console.log('Form is invalid');
    }
  }

  logInUser(data:any) {
    this.apiService.loginUser(data).subscribe(
      (response) => {
        console.log('User logged ind successfully!:', response);
        alert('You are now logged in');
        this.router.navigate([''])
      },
      (error) => {
        console.error('Error loggin in:', error);
        alert('Failed to log in. Please try again.');
      })
  }


}
