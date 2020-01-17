import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  // Obtenemos las opciones del menú
  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }

  // Obtenemos los datos de los usuarios
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // Obtenemos los datos de los albunes de prueba
  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  // Obtenemos la información del fichero con la información de los superheroes
  getHeroes() {
    return this.http.get('/assets/data/superheroes.json');
  }

}
