import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SoccerProvider } from '../../providers/soccer/soccer';

@IonicPage()
@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
  providers: [SoccerProvider]
})
export class NewsDetailPage {
  public news:any;
  id:any;
  title:String;
  description:String;
  imagePath:any;
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private soccerProvider : SoccerProvider) {
    
  }
//load
  ionViewDidEnter() {
    this.id = this.navParams.get('id');
    this.soccerProvider.getNewSoccerId(this.id).subscribe(data =>{
      let itemReturn =(data as any)._body;
      this.id = JSON.parse(itemReturn);
      console.log(this.id);
    },error =>{
      console.log(error);
    }
  );
  }

}
