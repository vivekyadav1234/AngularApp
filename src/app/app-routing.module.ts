import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './authentication/dashboard/dashboard.component';
import { last } from '@angular/router/src/utils/collection';
import { HomeComponent } from './authentication/home/home.component';
import { ProfileComponent } from './authentication/profile/profile.component';
import { DesignComponent } from './authentication/design/design.component';
//import { ServicesComponent } from './authentication/services/services.component';

const routes: Routes = [
   
   { path: 'dashboard', redirectTo: ' ', pathMatch: 'full' },
   { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  {path:'design',component:DesignComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }