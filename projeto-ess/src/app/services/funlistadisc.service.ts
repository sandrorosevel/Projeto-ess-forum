import { Injectable } from '@angular/core';
import { listdisc } from '../tipos/lista-disc';
import { User } from '../tipos/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FunListadiscService {

  listas : listdisc[] = [];
  
  

  constructor(private router: Router, private http: HttpClient) { }

  criarlista(titulo : string, autor : string){
    return this.http.post<any>(`${environment.url}/list-disc`, {titulo:titulo ,autor:autor})
    
  }

  getall(): Observable<listdisc[]>{
    return this.http.get<listdisc[]>(`${environment.url}/list-disc`)
  }

  comentar(titulo: string, comentario : string){
    return this.http.post<any>(`${environment.url}/list-disc/comentar`,{titulo:titulo, comentario:comentario} )
  }

  redirecionar() {
    this.router.navigate(["/criarlistdisc"])
  }

  delete(titulo: string, autor: string, index: number){
    return this.http.post<any>(`${environment.url}/list-disc/comentar/deletar`, {titulo:titulo, autor:autor, index:index})
  }

} 
