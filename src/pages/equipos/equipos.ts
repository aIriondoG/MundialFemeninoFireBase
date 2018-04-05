import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EquipoDetailsPage } from '../equipo-details/equipo-details';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-equipos',
  templateUrl: 'equipos.html',
})
export class EquiposPage {
  items: any[];
  searchQuery: string = '';
  listaEquipos: AngularFireList<any>;
  equipos: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase,
    public loadingCtrl: LoadingController) {

    this.listaEquipos = this.afDatabase.list('/Equipos');
    this.equipos = this.listaEquipos.valueChanges();

    this.items= this.equipos;
    this.presentLoading();
  }

  itemTapped(event, equipo) {
    this.navCtrl.push(EquipoDetailsPage, {
      equipos: equipo
    });
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando equipos...",
      duration: 3000
    });
    loader.present();
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.equipos= this.items;
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '')  {
      if (val != this.searchQuery) {
        this.equipos = this.items;
      }
      this.equipos = this.equipos.filter((equipos) => {
        return (equipos.country.toLowerCase.indexOf(val.toLowerCase()) > -1);
      })
      
    } 
  }


}
