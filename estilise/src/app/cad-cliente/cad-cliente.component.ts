import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrls: ['./cad-cliente.component.css']
})

export class CadClienteComponent implements OnInit {
  usuario: Usuario = new Usuario()
  
  alerta: boolean = false;
  validado: boolean = false;
  mostrarlogin: boolean = false
  paginaPolitica: boolean = false
  check: boolean = false
  
  mostrarPopupLogin: boolean = false
  senha: string;
  
  constructor(private usuarioService:UsuariosService, 
    private router:Router, private authService: AuthService, 
    private locationPage:Location) { }
    
    ngOnInit():void {
      let cadastro: string = localStorage.getItem('validado')
      // const checkVendedor = document.getElementsByName("checkVendedor")
      
      
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
    
    cadastrar(){
      let checkVendedor = ((<HTMLInputElement>document.getElementById("checkboxx")))
      if(this.senha === this.usuario.senha){
        if(checkVendedor.checked){
          this.usuario.profissional = true;
          this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
          this.usuario = resp
          alert("Usuário cadastrado com sucesso!!!")
          // this.mostrarPopupLogin = true
          location.assign('/categorias')
          
          })
        
        } else{
          this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
            this.usuario = resp
            alert("Usuário cadastrado com sucesso!!!")
            // this.mostrarPopupLogin = true
            location.assign('/produtos')
            
            })
        }
      }else{
        alert("Senhas incompatíveis!")
      }
    }
    
    refresh(){
      this.router.navigateByUrl("/produtos", {skipLocationChange:true}).then(()=>{
        this.router.navigate([this.locationPage.path()])
      })
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
  