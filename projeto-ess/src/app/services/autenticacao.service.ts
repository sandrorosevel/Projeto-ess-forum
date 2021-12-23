import { Injectable } from '@angular/core';
import { User } from '../tipos/usuario';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  usuariologado! : User;

  constructor( private router: Router, private http: HttpClient) {

  }

  login(nome:string, senha:string) : Observable<any> {
    
    return this.http.post<any>(`${environment.url}/User/login`, {nome:nome ,senha:senha} )

  }

  cadastro(nome: string, senha: string, email: string) : Observable<any>   {
   
    return this.http.post<any>(
      `${environment.url}/user/cadastro`
      , {nome:nome, senha:senha, email:email}
   )
  
  }
  
}
