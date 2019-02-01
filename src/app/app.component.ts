import { Component, OnInit } from '@angular/core';
import { PodcastApiService } from './podcast-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PodcastApiService]
})
export class AppComponent implements OnInit {
  title = '99 Percent Invisible';

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
