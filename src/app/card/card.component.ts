import { Component, Input, OnInit } from '@angular/core';
import { Episode } from '../models/episode.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() selectedEpisode
  play: boolean = false
  audio: any;

  ngOnInit(){
    this.audio = new Audio();
    this.audio.src = this.selectedEpisode.audio;
  }

  playAudio(){
    this.audio.load();
    this.audio.play();
    this.play = true;
  }

  pauseAudio(){
    this.audio.pause();
  }

}
