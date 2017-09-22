import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public nome_usuario:string = "Martin McFly";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  /**
   * soma de dois numeros inteiros
   */
  public soma(num1:number, num2:number):void {
    console.log(num1 + num2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.soma(2, 3);
  }

}
