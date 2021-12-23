import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';
import { User } from '../tipos/usuario';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  nome: string = "";
  senha: string = "";
  email: string = "";

  

  constructor(private router: Router, private authService: AutenticacaoService) { }

  ngOnInit(): void {
    this.nome= "";
    this.senha= "";
   ;
  }

  login(){
    this.authService.login(this.nome, this.senha).subscribe({
      next: () => {
        alert("Login bem sucedido");
        this.router.navigate(['/home'])
      },
      error: () =>{
        alert("Login mal sucedido")
      }

    });
    
  }
}
