import { Injectable } from '@angular/core';
import { Episode } from './models/episode.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class EpisodeService {
  episodes: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase){
    this.episodes = database.list('episodes')
  }
    addEpisode(newEpisode: Episode){
      this.episodes.push(newEpisode)
    }
}
