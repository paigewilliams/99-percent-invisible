import { Component, OnInit } from '@angular/core';
import { PodcastApiService } from './podcast-api.service';
import { Episode } from './models/episode.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PodcastApiService]
})
export class AppComponent implements OnInit {
  title = '99 Percent Invisible';
  masterEpisodes : Episode[] = [];

  episodes: Object = null;
  constructor( private podcastService: PodcastApiService ){}

  ngOnInit(){
    this.getPodcasts()
  }

  getPodcasts(){
    this.podcastService.getEpisodes().subscribe(response => {
      this.episodes = response
      this.createMasterEpisodes(this.episodes)
    })
  }

  createMasterEpisodes(episodes: any){
    episodes.results.forEach(episode => {
      const audio = episode.audio;
      const description = episode.description_original;
      const publishDate = episode.pub_date_ms;
      const title = episode.title_original;
      this.masterEpisodes.push(new Episode(audio, description, publishDate, title))
    })
    console.log(this.masterEpisodes);
  }
}
