import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUsuario } from '../model/loginUsuario';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  mostrarPopupCadastro: boolean = false
  mostrarPopupLogin: boolean = false

  constructor(private http: HttpClient) { }


  logar(loginUsuario: loginUsuario){
    return this.http.post('http://localhost:8080/usuarios/logar', loginUsuario)
  }

  cadastrar(usuario: Usuario){
    return this.http.post('http://localhost:8080/usuarios/cadastrar', usuario)
  }

  btnSair(){
    let logado = false;
    let token = localStorage.getItem('token')

    if(token != null){
      logado = true;
    }

    return logado;
  }
  btnLogineCadastro(){
    let logado = false;
    let token = localStorage.getItem('token')

    if(token == null){
      logado = true;
    }

    return logado;
  }

  popupCadastro(){
    this.mostrarPopupCadastro = true
  }
  popupLogin(){
    this.mostrarPopupLogin = true
    // this.refresh()
  }
}
