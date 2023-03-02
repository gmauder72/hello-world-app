import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    LogInLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
