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

verificarCampos(){
    let camposVaziosOUPreechidos = false
    let nome = localStorage.getItem('nome');
    let emailusuario = localStorage.getItem('emailusuario');
    let cpf_usuario= localStorage.getItem('cpf_usuario');
    let complemento = localStorage.getItem('complemento');
    let data_nascimento  = localStorage.getItem('data_nascimento');
    let cep = localStorage.getItem('cep');
    let telefone = localStorage.getItem('telefone');
    let imagem_usuario = localStorage.getItem('imagem_usuario');
    let cartao_credito = localStorage.getItem('cartao_credito');
    let id_usuario = localStorage.getItem('id_usuario');
    let numero_casa = localStorage.getItem('numero_casa');
    let profissional = localStorage.getItem('profissional');
    let especialidade = localStorage.getItem('especialidade');
    if(nome == undefined || telefone == undefined || complemento == undefined || cpf_usuario == undefined || numero_casa == undefined || cep == undefined || emailusuario == undefined){
       camposVaziosOUPreechidos = true;
    }
    return camposVaziosOUPreechidos
}
  popupCadastro(){
    this.mostrarPopupCadastro = true
  }
  popupLogin(){
    this.mostrarPopupLogin = true
    // this.refresh()
  }

  // possível tentativa de ngif no profissionais
  profissionalPreenchido(usuario:Usuario){
    let preenchido = false;
    if(usuario.especialidade != undefined && usuario.cep!=undefined){
      preenchido =true;
    }
    return preenchido;
  }

  
}
