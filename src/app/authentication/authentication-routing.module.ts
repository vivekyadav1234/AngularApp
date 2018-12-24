import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }  from './login/login.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DesignComponent } from './design/design.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  //{ path: 'log-in', component: LoginComponent },
  //{ path: 'login', redirectTo: '' },
  //{ path: 'dashboard', component: DashboardComponent },
  //{ path: 'dashboard', redirectTo: 'dashboard' },
  //{ path: 'profile', component: ProfileComponent },
  //{path:'design',component:DesignComponent},
  {path:'services',component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
