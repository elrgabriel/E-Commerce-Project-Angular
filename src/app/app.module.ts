import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomePageComponent } from './template/home-page/home-page.component';
import { ErrorPageComponent } from './template/error-page/error-page.component';
import { CartPageComponent } from './template/cart-page/cart-page.component';
import { CompletePurchaseComponent } from './template/complete-purchase/complete-purchase.component';
import { LoginPageComponent } from './template/login-page/login-page.component';
import { ProductSingleComponent } from './template/product-single/product-single.component';
import { ProfilePageComponent } from './template/profile-page/profile-page.component';
import { RegistryPageComponent } from './template/registry-page/registry-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importando o HttpClientModule
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component'; // Se necessário

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ErrorPageComponent,
    CartPageComponent,
    CompletePurchaseComponent,
    LoginPageComponent,
    ProductSingleComponent,
    ProfilePageComponent,
    RegistryPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule // Substituindo o provideHttpClient()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
