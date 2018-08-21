import { Component } from '@angular/core';
import { NavController,ToastController, NavParams, LoadingController, ItemContent } from 'ionic-angular';
import { NewsDetailPage} from '../news-detail/news-detail';
import { SoccerProvider } from '../../providers/soccer/soccer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listNews =[];
  public loader;
  public refresher;
  public isRefresher: boolean = false;
  public isInfinit: boolean = false;
  public infiniteScroll;
  public id;
  data: any;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private soccerProvider : SoccerProvider,
  public loadingCtrl: LoadingController) {
  }

  public presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando Noticias...",
    });
    this.loader.present();
  }
 public closeLoading(){
    this.loader.dismiss();
  }


  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefresher = true;
    this.listNews.length = 0;
    setTimeout(() => {
      //console.log('Async operation has ended');
      refresher.complete();

      this.loadingNews();
      refresher.complete();

    }, 2000);
  }

  doInfinite(infiniteScroll) {
    this.infiniteScroll = infiniteScroll;
    this.isInfinit = true;

    this.loadingNews();
    setTimeout(() => {
      //console.log('Passou aqui');
      infiniteScroll.complete();
    }, 2000);
  }

  ionViewDidEnter(){
    this.loadingNews();
  }

  loadingNews(){
    this.presentLoading();
    this.soccerProvider.getSoccer().subscribe(
      data =>{
        const response = (data as any);
        const objectReturn = JSON.parse(response._body);
        for(let i = 0; i < objectReturn.length; i++){
          this.listNews.push(objectReturn[i]);
        }
         console.log(objectReturn);
         this.closeLoading();
          if(this.isInfinit){
          this.infiniteScroll.complete;
          this.infiniteScroll = false;
        }
      },error =>{
        console.log(error);
        this.closeLoading();
        if(this.isInfinit){
          this.infiniteScroll.complete;
          this.isInfinit = false;
        }
      })
  }

  newSelected(item:any){
    this.navCtrl.push(NewsDetailPage,{id:item.id});
     // id: item
    //});
    
  }


  /*
  newSelected(item:any){
    //abre LOADING
    this.presentLoading();
    this.navCtrl.push(NewsDetailPage,{id:item.id});
    console.log(item.id);
    //fecha LOADING
    this.closeLoading();
  }
  */
}
