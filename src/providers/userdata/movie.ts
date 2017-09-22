import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private base_url = 'https://api.themoviedb.org/3'
  private api_key = '238fe4956a19c56bf4414602cd912529'

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies(){
    return this.http.get(this.base_url + '/movie/popular?api_key=' + this.api_key)
  };

}
