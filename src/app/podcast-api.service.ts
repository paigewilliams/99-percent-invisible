import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_KEY } from './api-keys';

const httpOptions = {
  headers: new HttpHeaders({'X-Mashape-Key': `${API_KEY}`})
}

@Injectable()
export class PodcastApiService {
  constructor(private http: HttpClient) { }

  getEpisodes(){
    return this.http.get(`https://api.listennotes.com/api/v1/search?language=English&ocid=938de7f853b24bf59c7d199b8fba3950&offset=0&only_in=author&published_after=0&published_before=1490190241000&q=Roman+Mars&safe_mode=1&sort_by_date=1&type=episode&&X-Mashshape-Key=tHPgs16JnlmshsSQNBZgpVBdDsqzp1PCdrZjsnxvIksLuD4yAU`, httpOptions)
  }
}
