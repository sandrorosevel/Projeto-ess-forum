import { Injectable } from '@angular/core';
import { listadisc } from '../tipos/lista-disc';

@Injectable({
  providedIn: 'root'
})
export class FunListadiscService {

  listas : listadisc[] = [];


  constructor() { }

  criarlista(titulo : string){
    this.listas.push(new listadisc(titulo));
    
  }

}
