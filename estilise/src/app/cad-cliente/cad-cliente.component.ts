import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})

export class CadClienteComponent implements OnInit {
  usuario: Usuario = new Usuario()
  profissional = this.usuario.profissional
  alerta: boolean = false;
  validado: boolean = false;
  mostrarlogin: boolean = false
  paginaPolitica: boolean = false
  check: boolean = false

  constructor(private usuarioService:UsuariosService, 
    private router:Router, private route:ActivatedRoute, 
    private locationPage:Location) { }
  
  ngOnInit():void {
  let cadastro: string = localStorage.getItem('validado')
  const checkVendedor = document.getElementsByName("checkVendedor")


  if (cadastro == "true"){
    this.alerta=true;
    localStorage.clear()
    setTimeout(() => {
      location.assign("/produtos")
    }, 10000);
    }
  }
  senhas = {
    senha: "",
    confirma_senha: ""
  }
  cadastrar(){
    if(this.profissional == true){
      this.usuarioService.postCadastro(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp
        location.assign("/categorias")
        this.validado = true
        this.router.navigate(["/categorias"])
        localStorage.setItem("validado", this.validado.toString())
        this.refresh()
      })
    }else{
      this.usuarioService.postCadastro(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario = resp
        location.assign("/produtos")
        this.validado = true
        this.router.navigate(["/produtos"])
        localStorage.setItem("validado", this.validado.toString())
        this.refresh()
      })
    }
  }

  refresh(){
    this.router.navigateByUrl("/produtos", {skipLocationChange:true}).then(()=>{
     this.router.navigate([this.locationPage.path()])
    })
  }

  validar() {
    if (this.senhas.senha === this.senhas.confirma_senha) {
      this.cadastrar();
    } else {
      alert("Senhas não correspondem")
    }
  }
  
  mudarPopupParaLogin(){
    this.mostrarlogin = true
  }

  
  recarregar(){
    setTimeout(() => {
      location.assign("/politica")
    }, 0);
  }
  
}
