import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla', 'Vision'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    // console.log(event);
    // Obtenemos el item que se ha movido y lo quitamos de la lista
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    console.log('item a mover: ' + itemMover);

    // Insertamos el item en su posición
    this.personajes.splice(event.detail.to, 0, itemMover);


    event.detail.complete();
  }

  // Guardamos los cambios o hacemos algo con la lista final
  guardar() {
    console.log(this.personajes);
  }
}
