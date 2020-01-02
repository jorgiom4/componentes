import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';
import {IonList} from "@ionic/angular";
import {share} from "rxjs/operators";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static: true}) lista: IonList;

  usuarios: Observable<any>;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(user) {
    console.log('Favorito:', user);
    this.lista.closeSlidingItems();
  }

  share(user) {
    console.log('Share:', user);
    this.lista.closeSlidingItems();
  }

  borrar(user) {
    console.log('Borrar:', user);
    this.lista.closeSlidingItems();
  }
}
