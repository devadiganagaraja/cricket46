import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { ListLeaguesComponent } from './list-leagues/list-leagues.component';
import { LeagueComponent } from './league/league.component';
import { SeasonComponent } from './season/season.component';
import { MatchComponent } from './match/match.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { PlayerComponent } from './player/player.component';


const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'welcome/:userName', component : WelcomeComponent, canActivate: [RouteGaurdService]},
  { path : 'players', component : ListPlayersComponent, canActivate: [RouteGaurdService]},
  { path : 'players/:playerId', component : PlayerComponent, canActivate: [RouteGaurdService]},
  { path : 'logout', component : LogoutComponent, canActivate: [RouteGaurdService]},
  { path : 'users', component : UsersComponent, canActivate: [RouteGaurdService]},
  { path : 'register', component : UserRegisterComponent},
  { path : 'users/:userName', component : UserComponent, canActivate: [RouteGaurdService]},
  { path : 'leagues', component : ListLeaguesComponent, canActivate: [RouteGaurdService]},
  { path : 'leagues/:league', component : LeagueComponent, canActivate: [RouteGaurdService]},
  { path : 'leagues/:league/seasons/:season', component : SeasonComponent, canActivate: [RouteGaurdService]},
  { path : 'matches/:match', component : MatchComponent, canActivate: [RouteGaurdService]},
  { path : '', component : LoginComponent},
  { path : '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
