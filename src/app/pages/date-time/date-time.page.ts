import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {

    // Iniciamos las opciones del picker
    this.customPickerOptions = {
      buttons: [{
        text: 'Seleccionar',
        handler: (evento) => console.log('Evento', evento)
      }, {
        text: 'Cancelar',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  cambioFecha(event: CustomEvent) {
    console.log('ionChange', event);
    console.log('Fecha seleccionada: ', new Date(event.detail.value) );

  }

  cambioFechaYear(event: CustomEvent) {
    console.log('ionChange', event);
    const fecha = new Date(event.detail.value);
    const year = fecha.getFullYear();
    console.log('Año seleccionado: ', year );

  }
}
