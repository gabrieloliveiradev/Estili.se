import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginUsuario } from '../model/loginUsuario';



 
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

  loginUsuario : loginUsuario = new loginUsuario
  login: boolean = false

  constructor(private router: Router) { }
  
  ngOnInit(){
    this.emailusuario = localStorage.getItem('emailusuario');
    let token = localStorage.getItem('token')
    
    if(token == null){
      alert('Faça o login antes de acessar a página feed')
      this.login = true
      this.router.navigate(['/login'])
    }
    // imports: [
    //   NgxMaskModule.forRoot(maskConfig),
    // ]
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
