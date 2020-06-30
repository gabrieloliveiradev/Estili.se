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
    let ok = false;
    let token =localStorage.getItem('token');

    if(token != null){
      ok = true;
    }
    return ok;
  }

  btnLogineCadastro(){
    let ok = false;
    let token =localStorage.getItem('token');

    if(token == null){
      ok = true;
    }
    return ok;
  }

  popupCadastro(){
    this.mostrarPopupCadastro = true
  }
  popupLogin(){
    this.mostrarPopupLogin = true
    // this.refresh()
  }

  //  ngif pra saber se perfil do profissional ta preenchido
  profissionalPreenchido(usuario:Usuario){
    let preenchido = false;
    if(usuario.especialidade != undefined && usuario.cep!=undefined){
      preenchido =true;
    }
    return preenchido;
  }


  // ngIf pra saber se é ou não profissional pra mostrar o botão que redireciona pro perfil certo
  btnProfissional(usuario:Usuario){
    let ok = false;
    if(usuario.profissional == 'true'){
      ok = true;
    }
    return ok;
  }
  btnProfissional2(usuario:Usuario){
    let ok = true;
    if(usuario.profissional == 'true'){
      ok = false;
    }
    return ok;
  }
}
