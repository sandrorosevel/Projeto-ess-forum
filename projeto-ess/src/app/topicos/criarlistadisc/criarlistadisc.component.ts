import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FunListadiscService } from 'src/app/services/funlistadisc.service';


@Component({
  selector: 'app-criarlistadisc',
  templateUrl: './criarlistadisc.component.html',
  styleUrls: ['./criarlistadisc.component.css']
})
export class CriarlistadiscComponent implements OnInit {

  titulo: string = "";
  autor: string = "";

  constructor(private router: Router, private funlistadis:FunListadiscService) { }

  ngOnInit(): void {
    this.titulo="";
    this.autor="";
    
  }

  criar(){
    this.funlistadis.criarlista(this.titulo, this.autor).subscribe({
      next: () => {
        alert("Discussão criada");
        this.router.navigate(['/home'])
      },
      error: () =>{
        alert("Erro ao criar discussão")
      }
    })
  }

}
