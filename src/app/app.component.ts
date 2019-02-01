import { Component, OnInit } from '@angular/core';
import { PodcastApiService } from './podcast-api.service';
import { EpisodeService } from './episode.service';
import { Episode } from './models/episode.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PodcastApiService, EpisodeService]
})
export class AppComponent implements OnInit {
  title = '99 Percent Invisible';
  episodes: Object = null;

  constructor( private podcastService: PodcastApiService, private episodeService: EpisodeService ){}

  ngOnInit(){
    // this.getPodcasts()
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
      const newEpisode = new Episode(audio, description, publishDate, title)
      this.episodeService.addEpisode(newEpisode)
    })
    // console.log(this.masterEpisodes);
  }
}
