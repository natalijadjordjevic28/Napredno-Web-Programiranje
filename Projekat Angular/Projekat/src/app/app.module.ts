import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddVestiComponent } from './components/vesti/add-vesti/add-vesti.component';

import { DeleteVestiComponent } from './components/vesti/delete-vesti/delete-vesti.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { AddTeamComponent } from './components/team/add-team/add-team.component';
import { NewsListComponent } from './components/vesti/news-list/news-list.component';
import { PlayerViewComponent } from './components/players/player-view/player-view.component';

import { AuthGuardAdm } from './guard/auth-guard-adm';
import { HomeComponent } from './components/home/home/home.component';
import { UtakmiceComponent } from './components/utakmice/utakmice/utakmice.component';
import { TokenInterceptor } from './services/token-interceptor';
import { AuthGuard } from './guard/auth.guard';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
     AddVestiComponent,
    DeleteVestiComponent,
    TeamListComponent,
    AddTeamComponent,
    NewsListComponent,
    PlayerViewComponent,
    HomeComponent,
    UtakmiceComponent,




  ],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule
  ],

  providers: [AuthGuard, AuthGuardAdm,{provide: HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
