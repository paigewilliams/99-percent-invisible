import { Component, OnInit } from '@angular/core';
import { PodcastApiService } from '../podcast-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [PodcastApiService]
})
export class BodyComponent implements OnInit {
  episodes: Object = null;
  constructor( private podcastService: PodcastApiService ){}

  ngOnInit(){
    this.getPodcasts()
  }

  getPodcasts(){
    this.podcastService.getEpisodes().subscribe(response => {
      this.episodes = response
      console.log(this.episodes)
    })
  }
}
