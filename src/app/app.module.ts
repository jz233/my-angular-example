import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent	  // 定义中加入此模块
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // The providers array tells Angular to create a single, shared instance of HeroService and inject into any class that asks for it.
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
