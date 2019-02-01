import { Component, OnInit } from '@angular/core';
import { Episode } from '../models/episode.model';
import { EpisodeService } from '../episode.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [EpisodeService]
})
export class BodyComponent implements OnInit  {

  episodes: FirebaseListObservable<any[]>

  constructor(private episodeService: EpisodeService){
     this.episodes = this.episodeService.getEpisodes()
     this.getEpisodes()
  }

  getEpisodes(){
    this.episodes.subscribe(episodes => {
      console.log(episodes)
      return episodes;
    })
  }

    ngOnInit(){

    }
}
