import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';


import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { AddTeamComponent } from './components/team/add-team/add-team.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { UtakmiceComponent } from './components/utakmice/utakmice/utakmice.component';
import { AddVestiComponent } from './components/vesti/add-vesti/add-vesti.component';
import { NewsListComponent } from './components/vesti/news-list/news-list.component';
import { AuthGuardAdm } from './guard/auth-guard-adm';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'getUtakmice', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path:'getUtakmice', component:UtakmiceComponent, canActivate:[AuthGuard]},
  {path: 'addTim', component:AddTeamComponent, canActivate:[AuthGuardAdm]},
  {path: 'getTimovi', component:TeamListComponent, canActivate:[AuthGuard]},
  {path: 'addVesti', component:AddVestiComponent, canActivate:[AuthGuardAdm]},
  {path: 'getVesti', component:NewsListComponent, canActivate:[AuthGuard]},
  {path: '**', component:HomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
