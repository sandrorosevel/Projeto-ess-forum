import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FunListadiscService } from 'src/app/services/funlistadisc.service';
import { listdisc } from 'src/app/tipos/lista-disc';

@Component({
  selector: 'app-computador',
  templateUrl: './computador.component.html',
  styleUrls: ['./computador.component.css']
})
export class ComputadorComponent implements OnInit {

  listasdisc: listdisc[];
  tituloaux= "";
  titulo= "";
  comentario="";
  index=0;
  autor="";

  constructor( private router: Router, private funlistadis:FunListadiscService) {
    this.listasdisc=[];
   }

  ngOnInit(): void {
  this.pegartitulos();
  }


  pegartitulos(){
   return this.funlistadis.getall().subscribe({
      next: (listas) =>{
        console.log(listas)
        
      },
      error: () =>{
        alert("error")
      }
    })
    
  }

  comentar(){
    this.funlistadis.comentar(this.titulo, this.comentario).subscribe({
      next: () =>{
        this.titulo= "";
        this.comentario="";
        alert("Comentario adicionado com sucesso")
      },
      error: () =>{
        alert("error")
      }

    })
  }

  delete(){
    this.funlistadis.delete(this.titulo, this.autor, this.index).subscribe({
      next: () =>{
        this.titulo= "";
        this.index=0;
        this.autor="";
        alert("Deletado com sucesso")
      },
      error: ()=>{
        alert("erro")
      }
    })
  }




}
