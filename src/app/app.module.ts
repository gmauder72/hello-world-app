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
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
