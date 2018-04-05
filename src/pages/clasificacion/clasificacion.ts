import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
//Importacion de paginaas
import { ClasificacionDetailsPage } from '../clasificacion-details/clasificacion-details';
//Importacion de afb2
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-clasificacion',
  templateUrl: 'clasificacion.html',
})
export class ClasificacionPage {

  listaEquipos: AngularFireList<any>;
  equipo: any[];
  equipoA : any[];
  j: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public afDatabase: AngularFireDatabase,
    public loadingCtrl: LoadingController
  ) {
    //this.j=0;
    this.listaEquipos = this.afDatabase.list('/Equipos');
    this.equipo = this.listaEquipos.valueChanges();
    this.j = this.equipo.length;
    //this.rellenoEquipoA();
    this.presentLoading();
    
  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Cargando grupos...",
      duration: 3000
    });
    loader.present();
  }
  itemTapped(event) {
    this.navCtrl.push(ClasificacionDetailsPage, {
      equipo: this.equipo
    });
  }
 
}


