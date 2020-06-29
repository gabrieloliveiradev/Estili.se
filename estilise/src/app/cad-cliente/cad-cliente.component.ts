import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { loginUsuario } from '../model/loginUsuario';
import { NavComponent } from '../nav/nav.component';


@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})

export class CadClienteComponent implements OnInit {
  usuario: Usuario = new Usuario

  alerta: boolean = false;
  validado: boolean = false;
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
    setTimeout(() => {
      location.assign("/produtos")
    }, 10000);
  }
}
conferirSenha(event: any){
  this.senha = event.target.value;
}

fecharPopup(){
  this.nav.mostrarPopupCadastro = false
  let teste = ((<HTMLInputElement>document.querySelector(".modal-backdrop.show")))
  teste.style.display = 'none'
}

cadastrar(){
  let checkVendedor = ((<HTMLInputElement>document.getElementById("checkboxx")))
  if(this.senha === this.usuario.senha){
    if(checkVendedor.checked){
      this.usuario.profissional = "true";
      this.fecharPopup();
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario = resp
      alert("Profissional cadastrado com sucesso!!!")

      this.router.navigate(['/home'])
      })
    
    }else{
      this.usuario.profissional = "false"
      this.fecharPopup();
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp
        alert("Usuário cadastrado com sucesso!!!")
        // this.mostrarPopupLogin = true
        })
    }
  }else{
    alert("Senhas incompatíveis!")
  }
}

// Para abrir a página de politica a partir do popup de cadastro
recarregar(){
  setTimeout(() => {
    location.assign("/politica")
  }, 0);
}

}
  
// refresh(){
//   this.router.navigateByUrl("/produtos", {skipLocationChange:true}).then(()=>{
//     this.router.navigate([this.locationPage.path()])
//   })
// }