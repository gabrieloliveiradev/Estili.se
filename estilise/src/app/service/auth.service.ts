import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUsuario } from '../model/loginUsuario';
import { Usuario } from '../model/usuario';
import { Produto } from '../model/produto';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  mostrarPopupCadastro: boolean = false
  mostrarPopupLogin: boolean = false
  usuario: Usuario = new Usuario
  camposVazios:boolean = false
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

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
    let nome = localStorage.getItem('nome');
    let emailusuario = localStorage.getItem('emailusuario');
    let cpfusuario= localStorage.getItem('cpfusuario');
    let complemento = localStorage.getItem('complemento');
    let data_nascimento  = localStorage.getItem('datanascimento');
    let cep = localStorage.getItem('cep');
    let telefone = localStorage.getItem('telefone');
    let imagem_usuario = localStorage.getItem('imagemusuario');
    let cartao_credito = localStorage.getItem('cartaocredito');
    let id_usuario = localStorage.getItem('idusuario');
    let numero_casa = localStorage.getItem('numerocasa');
    let profissional = localStorage.getItem('profissional');
    let especialidade = localStorage.getItem('especialidade');
    if(nome != "" && complemento != "" && cpfusuario != "" && cep != "" && emailusuario != ""){
       this.camposVazios = true;
    }
    return this.camposVazios
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
    if(usuario.especialidade != undefined && usuario.descricaoUsuario!=undefined){
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
  verificarProfissional(){
    let ok = false

    let profissional = localStorage.getItem('profissional')
    if(profissional != "false"){
      ok = true
    }
    return ok;
  }
  nomePreenchido(produto: Produto){
    let ok = false

    let nomeUsuario = produto.nomeUsuario
    if(nomeUsuario != null){
      ok = true
    }
    return ok
  }
}
