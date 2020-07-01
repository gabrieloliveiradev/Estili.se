import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  usuario: Usuario = new Usuario
  imagem_usuario: string = localStorage.getItem('imagem_usuario');
  id_usuario: string = localStorage.getItem('idusuario');
  mostrarPopupCadastro: boolean = false
  mostrarPopupLogin: boolean = true
  constructor(private router: Router, public auth: AuthService, public usuarioService: UsuariosService, private route: ActivatedRoute ) { }

  ngOnInit(){
    var id = Number(localStorage.getItem('idusuario'))
    this.findByIdUsuario(id)
  }

  findByIdUsuario (id:number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp:Usuario)=>{
      this.usuario=resp
    })
  }
  popupCadastro(){
    this.mostrarPopupCadastro = true
  }
  popupLogin(){
    this.mostrarPopupLogin = true
  }

  sair(){
    this.router.navigate(['/home'])  
    localStorage.clear() 
  }
  
}
