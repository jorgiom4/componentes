import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../services/data.service';
import {IonList, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  @ViewChild('lista', {static: true}) lista: IonList;

  usuarios: Observable<any>;

  constructor( private dataService: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    this.presentToast('Guardo en favoritos');
    this.lista.closeSlidingItems();
  }

  share(user) {
    this.presentToast('Compartido!');
    this.lista.closeSlidingItems();
  }

  borrar(user) {
    this.presentToast('Eliminado!');
    this.lista.closeSlidingItems();
  }

}
