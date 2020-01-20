import { Component, OnInit } from '@angular/core';
import {Componente} from '../../interfaces/interfaces';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // Array con los componentes
  componentes: Observable<Componente[]>;

  constructor( private dataServices: DataService ) { }

  ngOnInit() {

    this.componentes = this.dataServices.getMenuOpts();
  }

}

