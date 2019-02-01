import { Component, Input, OnInit } from '@angular/core';
import { Episode } from '../models/episode.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() selectedEpisode

  ngOnInit(){

  }

}
