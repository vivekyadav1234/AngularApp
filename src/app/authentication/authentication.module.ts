import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DesignComponent } from './design/design.component';
import { ServicesComponent } from './services/services.component';
 
@NgModule({
  declarations: [LoginComponent, DashboardComponent, HomeComponent, ProfileComponent, DesignComponent, ServicesComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  
  providers: []
})
export class AuthenticationModule { }
