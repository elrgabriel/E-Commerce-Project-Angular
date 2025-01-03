import { Component } from '@angular/core';
import { environment } from '../environments/environment.development';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp3-ecommerce';
  constructor() {
    console.log('TO AQUI ' + environment.api )
  }
}
