import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfComponent } from './user-prof/user-prof.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: UserComponent }]
},
{
    path: 'login', component: SignInComponent,
    children: [{ path: '', component: SignInComponent }]
},
{
    path: 'userprofile', component: UserProfComponent
    ,canActivate:[AuthGuard]
},
{
    path: '', redirectTo: '/login', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
