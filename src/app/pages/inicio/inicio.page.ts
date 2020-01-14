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
    },
    {
      icon: 'grid',
      name: 'Grid-Rows',
      redirectTo: '/grid-row'
    },
    {
      icon: 'grid',
      name: 'Grid Responsive',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'hammer',
      name: 'Input y Forms',
      redirectTo: '/input'
    },
    {
      icon: 'list',
      name: 'Listas - Sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder',
      name: 'Listas - Reorder',
      redirectTo: '/list-reorder'
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
