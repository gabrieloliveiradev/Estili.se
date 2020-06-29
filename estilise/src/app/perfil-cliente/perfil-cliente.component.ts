import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginUsuario } from '../model/loginUsuario';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';


// const maskConfig: Partial<IConfig> = {
//   validation: false,
// };

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  // emailusuario: string
  usuario : Usuario = new Usuario
  
  nome: string = localStorage.getItem('nome');
  emailusuario: string = localStorage.getItem('emailusuario');
  cpf_usuario: string = localStorage.getItem('cpf_usuario');
  complemento: string = localStorage.getItem('complemento');
  data_nascimento: string = localStorage.getItem('data_nascimento');
  cep: string = localStorage.getItem('cep');
  telefone: string = localStorage.getItem('telefone');
  imagem_usuario: string = localStorage.getItem('imagem_usuario');
  cartao_credito: string = localStorage.getItem('cartao_credito');
  id_usuario: string = localStorage.getItem('id_usuario');
  numero_casa: string = localStorage.getItem('numero_casa');
  profissional:string = localStorage.getItem('profissional');
  especialidade: string = localStorage.getItem('especialidade');

  loginUsuario : loginUsuario = new loginUsuario
  login: boolean = false
  mostrarPopupLogin: boolean = false
  
  // validadecartao = document.getElementById('validadecartao')
  // numerocartao = <HTMLParagraphElement>document.getElementById('numerocartao')
  // inputnumero = <HTMLInputElement>document.getElementById("inputnumero")
  // emailusuario: string = localStorage.getItem('emailusuario')

  constructor(private router: Router, private http: HttpClient) { }

  fecharPopup(){
    let teste = ((<HTMLInputElement>document.querySelector(".modal-backdrop.show")))
    teste.style.display = 'none'
  }
  
  ngOnInit(){
    //var objeto = new Object();
    //objeto.emailusuario = "joao@joao.com";
    //objeto.senha = "123456789";
    //this.http.post('http://localhost:8080/usuarios/logar', objeto);
    //this.http.get('http://localhost:8080/usuarios');
    this.emailusuario = localStorage.getItem('emailusuario');
    let token = localStorage.getItem('token');
    let cpf_usuario = localStorage.getItem('cpf_usuario');
    
    if(token == null){
      this.login = true
      alert('Faça o login antes de acessar a página de perfil')
      this.mostrarPopupLogin = true
      // this.router.navigate(['/home'])
      this.fecharPopup()     
    }
  }
  

  // typescript do cartão de crédito
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
  substituirvalidade(){
    let validadeMes = document.getElementById("validadeMes")
    let validadeAno = document.getElementById("validadeAno")
    let selectMes = ((<HTMLSelectElement>document.getElementById("selectMes")).value)
    let selectAno = ((<HTMLSelectElement>document.getElementById("selectAno")).value)
    validadeMes.innerHTML = selectMes;
    validadeAno.innerHTML = selectAno;
  }
  
}
