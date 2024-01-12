import { Routes } from '@angular/router';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { HowItWorksComponent } from './public-components/how-it-works/how-it-works.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { UserComponent } from './user/user.component';
import { AddBooksComponent } from './user/components/add-books/add-books.component';
import { DeleteBooksComponent } from './user/components/delete-books/delete-books.component';
import { AllBooksComponent } from './books/components/all-books/all-books.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { BooksComponent } from './books/books.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './public-components/home/home.component';


export const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'about-us', component:AboutUsComponent},
  {path:'works', component:HowItWorksComponent},
  {path:'auth', component:AuthComponent, 
  // loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule)
  children:[
    {path: 'login', component:LoginComponent},
    {path: 'signup', component:SignupComponent},
  ]
  },
  {path:'user/:userId', component: UserComponent, 
  // loadChildren: () => import('./user/user.module').then((x) => x.UserModule)
  children: [
    {path:'add-book', component: AddBooksComponent},
    {path:'delete-book', component: DeleteBooksComponent},
  ]
},
  
  {path:'book', 
  component: BooksComponent, 
  children: [
    {path:'', component: AllBooksComponent},
    {path:'book-details', component: BookDetailsComponent},
  ]
},
  
{path: '**', component: NotFoundComponent}
];
