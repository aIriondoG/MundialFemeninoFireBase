import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-equipo-details',
  templateUrl: 'equipo-details.html',
})
export class EquipoDetailsPage {

  sItem: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sItem = navParams.get('equipos');
  }
}
