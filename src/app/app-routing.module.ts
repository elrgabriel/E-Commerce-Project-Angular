import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './template/home-page/home-page.component';
import { ProductSingleComponent } from './template/product-single/product-single.component';
import { LoginPageComponent } from './template/login-page/login-page.component';
import { RegistryPageComponent } from './template/registry-page/registry-page.component';
import { ProfilePageComponent } from './template/profile-page/profile-page.component';
import { CartPageComponent } from './template/cart-page/cart-page.component';
import { CompletePurchaseComponent } from './template/complete-purchase/complete-purchase.component';
import { ErrorPageComponent } from './template/error-page/error-page.component';

export const routes: Routes = [
  { path: 'home-page', title: 'Home' , component: HomePageComponent },
  { path: 'product-single', title: 'Product', component: ProductSingleComponent },
  { path: 'login-page', title: 'Login',component: LoginPageComponent },
  { path: 'registry-page', title: 'Register', component: RegistryPageComponent },
  { path: 'profile-page', title: 'Profile', component: ProfilePageComponent },
  { path: 'cart-page', title: 'Cart', component: CartPageComponent },
  { path: 'complete-purchase', title: 'Checkout', component: CompletePurchaseComponent },
  { path: '', title: 'Home', redirectTo: '/home-page', pathMatch: 'full' },
  { path: '**', title: 'Error404', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
