import { Component, OnInit } from '@angular/core';
import { loginUsuario } from '../model/loginUsuario';
import { Usuario } from '../model/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-editar-perfil-profissional',
  templateUrl: './editar-perfil-profissional.component.html',
  styleUrls: ['./editar-perfil-profissional.component.css']
})
export class EditarPerfilProfissionalComponent implements OnInit {

  usuario: Usuario = new Usuario
  loginUsuario: loginUsuario = new loginUsuario

  senha:String

  
  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
  }
  fecharPopup(){
    location.assign('/editar-profissional')
  }

  conferirSenha(event: any){
    this.senha = event.target.value;
  }
  

  salvar() {
    this.usuariosService.putUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario=resp
      this.router.navigate(['/perfil-cliente'])
      location.assign('/perfil-cliente')
    })
  }
}
