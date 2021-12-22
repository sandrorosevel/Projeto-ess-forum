import { Injectable } from '@angular/core';
import { listadisc } from '../tipos/lista-disc';
import { usuario } from '../tipos/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FunListadiscService {

  listas : listadisc[] = [];
  
  

  constructor(private router: Router) { }

  criarlista(titulo : string, usuario : usuario){
    this.listas.push(new listadisc(titulo, usuario));
    
  }

  comentar(comentario : string){
    this.listas[this.listas.length-1].comentarios.push()
  }

  redirecionar() {
    this.router.navigate(["/topicos/criarlistadisc"])
  }

} 
