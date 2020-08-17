import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserComponent } from './user/user.component';
import { ListLeaguesComponent } from './list-leagues/list-leagues.component';
import { LeagueComponent } from './league/league.component';
import { SeasonComponent } from './season/season.component';
import { MatchComponent } from './match/match.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule,} from '@angular/material/tabs';
import { SummaryComponent } from './match/summary/summary.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { CommentaryComponent } from './match/commentary/commentary.component';
import { FeedsComponent } from './match/feeds/feeds.component';
import { ArticleComponent } from './article/article.component';
import { PlayerComponent } from './player/player.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListPlayersComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    UsersComponent,
    UserRegisterComponent,
    UserComponent,
    ListLeaguesComponent,
    LeagueComponent,
    SeasonComponent,
    MatchComponent,
    SummaryComponent,
    ScorecardComponent,
    CommentaryComponent,
    FeedsComponent,
    ArticleComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
