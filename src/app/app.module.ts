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
import {MatTabsModule} from '@angular/material/tabs';
import { SummaryComponent } from './match/summary/summary.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { CommentaryComponent } from './match/commentary/commentary.component';
import { FeedsComponent } from './match/feeds/feeds.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
