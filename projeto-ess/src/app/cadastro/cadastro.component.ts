import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { AutenticacaoService } from '../services/autenticacao.service';
 import { User } from '../tipos/usuario';
 import { Router } from '@angular/router';


 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  nome: string = "";
  senha: string = "";
  email: string = "";

  constructor( private router: Router, private authService: AutenticacaoService) { }

  ngOnInit(): void {
  this.nome="";
  this.senha="";
  this.email="";
  }

  cadastro(){

    this.authService.cadastro(this.nome,this.senha,this.email).subscribe({
      next: (Message) =>{
        this.nome="";
        this.senha="";
        this.email="";
        alert(Message)
        this.router.navigate(['/home']);
      },
      error: (err) =>{
        alert(err)
      }
    })

  }

}
