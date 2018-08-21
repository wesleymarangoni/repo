import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ClubsPage } from '../pages/clubs/clubs';
import { AboutPage } from '../pages/about/about';
import { NewsDetailPage } from '../pages/news-detail/news-detail';


import { ChampionshipPageModule } from '../pages/championship/championship.module';
import { ContactPageModule } from '../pages/contact/contact.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { SoccerProvider } from '../providers/soccer/soccer';
import { NewsDetailPageModule } from '../pages/news-detail/news-detail.module';
import { AboutPageModule } from '../pages/about/about.module';
import { ClubsPageModule } from '../pages/clubs/clubs.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ClubsPageModule,
    AboutPageModule,
    ChampionshipPageModule,
    ContactPageModule,
    NewsDetailPageModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewsDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SoccerProvider,
  ]
})
export class AppModule {}
