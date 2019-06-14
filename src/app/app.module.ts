import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Popover, Segment } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ImageCardsPage } from '../pages/image-cards/image-cards';
import { GridsPage } from '../pages/grids/grids';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalPage } from '../pages/modal/modal';
import { PopoverPage } from '../pages/popover/popover';
import { SearchPage } from '../pages/search/search';
import { SegmentPage } from '../pages/segment/segment';
import { SlidesPage } from '../pages/slides/slides';
import { TabsPage } from '../pages/tabs/tabs';
import { HousePage } from '../pages/house/house';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImageCardsPage,
    GridsPage,
    ModalPage,
    PopoverPage,
    SearchPage,
    SegmentPage,
    SlidesPage,
    TabsPage,
    HousePage,
    AboutPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ImageCardsPage,
    GridsPage,
    ModalPage,
    PopoverPage,
    SearchPage,
    SegmentPage,
    SlidesPage,
    TabsPage,
    HousePage,
    AboutPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
