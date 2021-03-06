import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items= Array(20);

  constructor( private popOverController: PopoverController ) { }

  ngOnInit() {}

  onClick(valor: number) {
    console.log('valor seleccionado: ' + valor);
    this.popOverController.dismiss({
      item: valor
    });
  }
}
