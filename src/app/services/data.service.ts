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
}
