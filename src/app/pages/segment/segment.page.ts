import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment} from '@ionic/angular';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  // Obtenemos el segmento del html para poder operar con el
  @ViewChild(IonSegment, {static: true }) segment: IonSegment;

  superHeroes: Observable<any>;
  publisher = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    // Establecemos el incial
    this.segment.value = 'Todos';

    // Obtenemos la lista de los super héroes
    this.superHeroes = this.dataService.getHeroes();

  }

  // Capturamos el evento producido en el segmento
  segmentChanged(evento) {
    // console.log('Evento: ' + evento.detail.value);
    const valorSegmento = evento.detail.value;

    if (valorSegmento === 'Todos') {
      this.publisher = '';
      return;
    }

    this.publisher = valorSegmento;
  }
}
