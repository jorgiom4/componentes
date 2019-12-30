import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  // Array con los componentes
  componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Botones y router',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/cards'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbok',
      redirectTo: '/checkbox'
    },
    {
      icon: 'calendar',
      name: 'Date-Time',
      redirectTo: '/date-time'
    },
    {
      icon: 'locate',
      name: 'Fabs',
      redirectTo: '/fab'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
