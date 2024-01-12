import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';


export const routes: Routes = [
  // {path:'auth', component:AuthComponent, children:[
  //   {path: 'login', component:LoginComponent},
  //   {path: 'signup', component:SignupComponent},
  // ]

  // }

  {
    path     : '',
    component: AuthComponent,
    children : [
        {
            path     : './auth/',
            pathMatch: 'full',
            component: LoginComponent,
        },
        {
            path     : ':id',
            component: SignupComponent,
        },
    ],
},
] as Routes;
