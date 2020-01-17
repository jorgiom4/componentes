import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment} from '@ionic/angular';
import {Observable} from 'rxjs';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
})
export class SkeletonPage implements OnInit {

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
