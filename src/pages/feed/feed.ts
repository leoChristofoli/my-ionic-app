import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public obj_feed = {
    titulo: "McFly",
    data: "November 5, 1955",
    descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    likes: 12,
    qntd_comments: 5,
    time_comment: "11h ago"

  }

  public lista_filmes = new Array<any>();

  public nome_usuario:string = "Martin McFly";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  /**
   * soma de dois numeros inteiros
   */
  public soma(num1:number, num2:number):void {
    console.log(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        const response = (data as any);
        const response_obj = JSON.parse(response._body);
        this.lista_filmes = response_obj.results;
        console.log(response_obj)
      }, error => {
        console.log(error)
      }
    )
  }

}
