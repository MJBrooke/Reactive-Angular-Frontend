import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ReactiveTweetConsumerComponent} from './component/reactive-tweet-consumer/reactive-tweet-consumer.component';
import {ReactiveTweetConsumerService} from './service/reactive-tweet-consumer.service';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveTweetConsumerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ReactiveTweetConsumerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
