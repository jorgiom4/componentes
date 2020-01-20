import { Component, OnInit } from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: any;

  constructor( public loadingController: LoadingController ) { }

  ngOnInit() {
  }

  cargarDatos(mensaje) {

    this.presentLoading(mensaje);

    setTimeout(( ) => {
      this.loading.dismiss();
    }, 3000);
  }

  // Presentamos el loading
  async presentLoading(mensaje) {
    this.loading = await this.loadingController.create({
      message: mensaje,
      // duration: 2000
    });
    return this.loading.present();

  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

}
