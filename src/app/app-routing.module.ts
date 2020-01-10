import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './users/list/list.component';
import { AddUserComponent } from './users/add/add.component';
import { PageNotFoundComponent } from './not-found/not-found.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  //Site routes goes here 
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'users', component: ListUsersComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'aboutus', component: AboutusComponent },
    ]
  },
  //no layout routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
