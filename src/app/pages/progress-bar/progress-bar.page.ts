import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
    porcentaje = 0.7;

  constructor() { }

  ngOnInit() {
  }

  cambioValor(evento) {
    console.log('Valor: ' + evento.detail.value);
    const valor = evento.detail.value / 100;
    this.porcentaje =  valor;
  }
}
