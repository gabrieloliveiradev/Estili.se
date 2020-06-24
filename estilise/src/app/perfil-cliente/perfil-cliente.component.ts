import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {

  usuario: Usuario = new Usuario

  nome: string = localStorage.getItem('nome')
  login: boolean = false

  constructor(private router: Router) { }

  ngOnInit(){
    let token = localStorage.getItem('token')

    if(token == null){
      alert('Faça o login antes de acessar o perfil')
      this.login = true
      this.router.navigate(['/login'])
    }
  }

 

}
