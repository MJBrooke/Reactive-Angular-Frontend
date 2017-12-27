import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as EventSource from 'eventsource';
import {Subscriber} from 'rxjs/Subscriber';

@Injectable()
export class ReactiveTweetConsumerService {

  tweets: TweetModel[] = [];

  // We return an observable containing the array of tweets
  getTweets(): Observable<TweetModel[]> {

    // Create the observable that components can subscribe to
    return Observable.create(
      // We create the method that will be invoked when something subscribes to this observable
      (subscriber: Subscriber <TweetModel[]>) => {

        // Opens up a non-closing HTTP connection that can receive server-sent events
        const tweetSource = new EventSource('/reactive/tweet');

        // When a Tweet/Server-Send Event is received in Event Source...
        tweetSource.onmessage = tweetData => {
          // We create our object from the data field of the event
          const tweet: TweetModel = JSON.parse(tweetData.data);

          console.log(tweet.content);

          // We add the new tweet to our current collection of already-received tweets
          this.tweets.push(tweet);

          // Notify subscribers that the tweet array has been updated
          subscriber.next(this.tweets);
        };
      }
    );
  }

}
