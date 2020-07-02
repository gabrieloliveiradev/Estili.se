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
  erro: boolean = false
  paginaPolitica: boolean = false
  check: boolean = false
  
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

cadastrar(){
  let checkVendedor = ((<HTMLInputElement>document.getElementById("checkboxx")))
  let fecharPopupLogin = ((<HTMLInputElement>document.querySelector("#btnCadastrar")))
  if(this.senha === this.usuario.senha){
      fecharPopupLogin.setAttribute('data-target', '#popupdeLogin')
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
  }else{
    fecharPopupLogin.removeAttribute('data-target')
    this.erro = true
    localStorage.setItem("erro", this.erro.toString())
    this.alertaErro = true

    let cadastroErrado: string = localStorage.getItem('erro')
    if (cadastroErrado == "true"){
      this.alertaErro=true;
      localStorage.clear()
    }
  }
}

// Para abrir a página de politica a partir do popup de cadastro
recarregar(){
  setTimeout(() => {
    location.assign("/politica")
  }, 0);
}

}