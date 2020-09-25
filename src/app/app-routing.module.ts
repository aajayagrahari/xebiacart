import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authenticate } from "./appService/authenticate.service";

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    canActivate: [authenticate], 
    component: HomeComponent,
  },
  { 
    path: '**', 
    redirectTo: 'login'
  }
];

