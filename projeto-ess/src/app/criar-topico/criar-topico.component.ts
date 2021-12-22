import { Component, OnInit } from '@angular/core';
import { FunListadiscService } from '../services/funlistadisc.service';
@Component({
  selector: 'app-criar-topico',
  templateUrl: './criar-topico.component.html',
  styleUrls: ['./criar-topico.component.css']
})
export class CriarTopicoComponent implements OnInit {

  constructor(private funclistadisc: FunListadiscService) { }

  ngOnInit(): void {
  }
  redirecionar () {
    this.funclistadisc.redirecionar();
  }
}
