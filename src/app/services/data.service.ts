import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuOpts(){
    //get<Componente[]> que trae informacion con la estructura de componente que pertenece al interface
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
  
  getAlbums(){    
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums?_limit=30');
  }

  getHeroes(){    
    return this.http.get<any>('/assets/data/superheroes.json');
  }

  getUsers(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}
