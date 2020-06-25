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
  nome: string = localStorage.getItem('nome')
  loginUsuario : loginUsuario = new loginUsuario
  usuario: Usuario = new Usuario

    // login: boolean = false
  constructor(private router: Router) { }
  
  ngOnInit(){
    // let token = localStorage.getItem('token')
    
    // if(token == null){
    //   alert('Faça o login antes de acessar a página feed')
    //   this.login = true
    //   this.router.navigate(['/login'])
    // }
  }
  
  substituirnumero(){
  let numerocartao = document.getElementById('numerocartao')
  let inputnumero = ((<HTMLInputElement>document.getElementById("inputnumero")).value)
  // alert(inputnumero)
  numerocartao.innerHTML = inputnumero;
  }
  substituirnome(){
  let nomecartao= document.getElementById('nomecartao')
  let inputnome= ((<HTMLInputElement>document.getElementById("inputnome")).value)
  nomecartao.innerHTML = inputnome;
  }
  
  
}
