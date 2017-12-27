import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ReactiveTweetConsumerService} from '../../service/reactive-tweet-consumer.service';

@Component({
  selector: 'app-reactive-tweet-consumer',
  templateUrl: './reactive-tweet-consumer.component.html'
})
export class ReactiveTweetConsumerComponent implements OnInit {

  /*
    Note that we directly keep a reference to the observable returned by the service.
    This allows our component to respond to new Tweets sent by the server, as we never have a 'complete' array of tweets.
    */
  tweets: Observable<TweetModel[]>;

  constructor(private reactiveTweetConsumerServer: ReactiveTweetConsumerService) {}

  ngOnInit(): void {
    // Note that we don't subscribe here in the component - we use the async pipe in the HTML template to subscribe and display the tweets
    this.tweets = this.reactiveTweetConsumerServer.getTweets();
  }
}

