import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { loginUsuario } from '../model/loginUsuario';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  emailusuario: string = localStorage.getItem('emailusuario');
  loginUsuario : loginUsuario = new loginUsuario

  login: boolean = false

  constructor(private router: Router) { }

  ngOnInit(){
    let token = localStorage.getItem('token')
    if(token == null){
      alert('Faça o login antes de acessar a página feed')
      this.login = true
      this.router.navigate(['/login'])
    }
  }

 

}
