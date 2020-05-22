import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router, PreloadingStrategy } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})

export class CadClienteComponent implements OnInit {
  usuario: Usuario = new Usuario()
  alerta: boolean = false;
  validado: boolean = false;
  constructor(private usuarioService:UsuariosService, private router:Router, private route:ActivatedRoute, private locationPage:Location) { }
  
  ngOnInit() {
  let cadastro: string = localStorage.getItem('validado')
  if (cadastro == "true"){
    this.alerta=true;
    localStorage.clear()
    setTimeout(() => {
      location.assign("/users")
    }, 10000);
  }
  }
  senhas = {
    senha: "",
    confirma_senha: ""
  }
  cadastrar(){
    this.usuarioService.postCadastro(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario = resp
      location.assign("/cadastro-usuario")
      this.validado = true
      this.router.navigate(["/cadastro-usuario"])
      localStorage.setItem("validado", this.validado.toString())
      this.refresh()
    })
  }
  refresh(){
    this.router.navigateByUrl("/cadastro-usuario", {skipLocationChange:true}).then(()=>{
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
  
}
