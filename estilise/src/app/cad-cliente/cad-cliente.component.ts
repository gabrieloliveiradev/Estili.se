import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { loginUsuario } from '../model/loginUsuario';
import { NavComponent } from '../nav/nav.component';
import { listeners } from 'process';


@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})

export class CadClienteComponent implements OnInit {
  usuario: Usuario = new Usuario

  alerta: boolean = false;
  alertaErro: boolean = false
  validado: boolean = false;
  paginaPolitica: boolean = false
  check: boolean = false
  textoSmallNomeInvalid: boolean = false
  textoSmallEmailInvalid: boolean = false
  textoSmallSenhaInvalid: boolean = false
  textoSmallConfirmarsenhaInvalid: boolean = false
  senha: string;
  login: boolean = false

  loginUsuario: loginUsuario = new loginUsuario;
  
  constructor(private router:Router, public authService: AuthService, public nav: NavComponent) { }
    
ngOnInit(){
  let cadastro: string = localStorage.getItem('validado')
 
  if (cadastro == "true"){
    this.alerta=true;
    localStorage.clear()
  }
}
conferirSenha(event: any){
  this.senha = event.target.value;
}


fecharPopup(){
  this.nav.mostrarPopupCadastro = false
  let fechar = ((<HTMLInputElement>document.querySelector(".modal-backdrop.show")))
  fechar.style.display = 'none'
}


validarCampos(){
  let fecharPopupLogin = ((<HTMLInputElement>document.querySelector("#btnCadastrar")))
  fecharPopupLogin.removeAttribute('data-target')
  let email =  ((<HTMLInputElement>document.querySelector("#emailCadastro"))).value
  let inputNome =  ((<HTMLInputElement>document.querySelector(".inputNome")))
  let inputEmail =  ((<HTMLInputElement>document.querySelector(".inputEmail")))
  let nome =  ((<HTMLInputElement>document.querySelector("#nome"))).value
  let checkboxPoliticaePrivacidade = ((<HTMLInputElement>document.getElementById("checkboxPoliticaePrivacidade")))
  let textoPoliticaEPrivacidade = ((<HTMLInputElement>document.querySelector(".textoPoliticaEPrivacidade")))
  let confirmasenhas = ((<HTMLInputElement>document.querySelector(".confirmarSenha")))
  let senhas = ((<HTMLInputElement>document.querySelector(".senha")))

  if(nome.length <= 2 || nome == "" ){
    inputNome.style.borderBottom = "2px solid red"
    this.textoSmallNomeInvalid = true
  }
  else if(email.length <= 11 || email == null || email == undefined){
    inputEmail.style.borderBottom = "2px solid red"
    this.textoSmallEmailInvalid = true
    inputNome.style.borderBottom = ""
    this.textoSmallNomeInvalid = false
  }
  else if(this.senha !== this.usuario.senha || this.senha == null || this.usuario.senha == null || this.senha == undefined || this.usuario.senha == undefined || this.senha == "" || this.usuario.senha == ""){
    this.alertaErro = true
    senhas.style.borderBottom = "2px solid red"
    confirmasenhas.style.borderBottom = "2px solid red"
    this.textoSmallSenhaInvalid = true
    this.textoSmallConfirmarsenhaInvalid = true
    this.textoSmallEmailInvalid = false
    inputEmail.style.borderBottom = ""
    inputNome.style.borderBottom = ""
    this.textoSmallNomeInvalid = false
  }
  else if(checkboxPoliticaePrivacidade.checked == false){
    textoPoliticaEPrivacidade.style.color = "red"
    senhas.style.borderBottom = ""
    confirmasenhas.style.borderBottom = ""
    this.textoSmallSenhaInvalid = false
    this.textoSmallConfirmarsenhaInvalid = false
    
  }
  else{ 
    textoPoliticaEPrivacidade.style.color = ""
    fecharPopupLogin.setAttribute('data-target', '#popupdeLogin')
    this.cadastrar()
  }
  return true
}

cadastrar(){
  let checkVendedor = ((<HTMLInputElement>document.getElementById("checkboxx")))
  let fecharPopupLogin = ((<HTMLInputElement>document.querySelector("#btnCadastrar")))


  this.alertaErro = false

    if(checkVendedor.checked){
      this.usuario.profissional = "true";
      this.alerta = true
      this.fecharPopup();
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario = resp
      this.router.navigate(['/home'])
      })
    
    }else{
      fecharPopupLogin.setAttribute('data-target', '#popupdeLogin')
      this.usuario.profissional = "false"
      this.fecharPopup();
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp
        })

  }
}

// Para abrir a página de politica a partir do popup de cadastro
recarregar(){
  setTimeout(() => {
    location.assign("/politica")
  }, 0);
}

}