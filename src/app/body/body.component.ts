import { Component, OnInit } from '@angular/core';
import { PodcastApiService } from '../podcast-api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [PodcastApiService]
})
export class BodyComponent  {

}
