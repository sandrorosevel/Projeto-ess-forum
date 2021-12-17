import { Component, OnInit } from '@angular/core';
import { FunListadiscService } from 'src/app/services/funlistadisc.service';
import { listadisc } from 'src/app/tipos/lista-disc';

@Component({
  selector: 'app-computador',
  templateUrl: './computador.component.html',
  styleUrls: ['./computador.component.css']
})
export class ComputadorComponent implements OnInit {

  listas : listadisc[] = [];

  constructor(private funcoes : FunListadiscService ) { }

  ngOnInit(): void {
  }

  criarlista(){

  }

  comentar(){

  }



}
