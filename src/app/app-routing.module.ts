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
import { ArticleComponent } from './article/article.component';
import { NewArticleComponent } from './article/new-article/new-article.component';
import {HomeComponent} from './home/home.component'
import { MyTeamComponent } from './my-team/my-team.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { ViewArticleComponent } from './article/view-article/view-article.component';
import { Cric11Component } from './cric11/cric11.component';




const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'welcome/:userName', component : WelcomeComponent, canActivate: [RouteGaurdService]},
  { path : 'players', component : ListPlayersComponent, canActivate: [RouteGaurdService]},
  { path : 'players/:playerId', component : PlayerComponent},
  { path : 'logout', component : LogoutComponent, canActivate: [RouteGaurdService]},
  { path : 'users', component : UsersComponent, canActivate: [RouteGaurdService]},
  { path : 'register', component : UserRegisterComponent},
  { path : 'users/:userName', component : UserComponent, canActivate: [RouteGaurdService]},
  { path : 'leagues', component : ListLeaguesComponent},
  { path : 'leagues/:league', component : LeagueComponent},
  { path : 'leagues/:league/seasons/:season', component : SeasonComponent},
  { path : 'matches/:matchId', component : MatchComponent},
  {path: 'article', component: ArticleComponent, canActivate: [RouteGaurdService]},
  {path:'newArticle', component:NewArticleComponent},
  {path:'editArticle/:articleId', component:EditArticleComponent},
  {path:'viewArticle/:articleId', component:ViewArticleComponent},
  {path:'home', component: HomeComponent},
  {path: 'myTeam', component: MyTeamComponent},
  { path: 'cric11/:id', component: Cric11Component },
  { path : '', component : HomeComponent},
  { path : '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
