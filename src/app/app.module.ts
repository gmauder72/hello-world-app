import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBArComponent } from './Navigation/nav-bar/nav-bar.component';
import { OpinionCardComponent } from './opinion-card/opinion-card.component';
import { EventCardComponent } from './event-card/event-card.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { StreamComponent } from './stream/stream.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { NewTimesComponent } from './new-times/new-times.component';
import { BannerComponent } from './banner/banner.component';
import { GamesLayoutComponent } from './Layouts/games-layout/games-layout.component';
import { FoumsLayoutComponent } from './Layouts/foums-layout/foums-layout.component';
import { LeaderboardLayoutComponent } from './Layouts/leaderboard-layout/leaderboard-layout.component';
import { HomePageLayoutComponent } from './Layouts/home-page-layout/home-page-layout.component';
import { LogInLayoutComponent } from './Layouts/log-in-layout/log-in-layout.component';
import { GameInfoComponent } from './Layouts/leaderboard-layout/game-info/game-info.component';
import { leaderboardComponent } from './Layouts/leaderboard-layout/leaderboard/leaderboard.component';
import { LeaderboardInfoComponent } from './Layouts/leaderboard-layout/leaderboard-info/leaderboard-info.component';
import { MainForumsComponent } from './Layouts/foums-layout/main-forums/main-forums.component';
import { SupporterForumsComponent } from './Layouts/foums-layout/supporter-forums/supporter-forums.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBArComponent,
    OpinionCardComponent,
    EventCardComponent,
    NewsCardComponent,
    StreamComponent,
    TitlePageComponent,
    NewTimesComponent,
    BannerComponent,
    GamesLayoutComponent,
    FoumsLayoutComponent,
    LeaderboardLayoutComponent,
    HomePageLayoutComponent,
    LogInLayoutComponent,
    GameInfoComponent,
    leaderboardComponent,
    LeaderboardInfoComponent,
    MainForumsComponent,
    SupporterForumsComponent,
    UserInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
