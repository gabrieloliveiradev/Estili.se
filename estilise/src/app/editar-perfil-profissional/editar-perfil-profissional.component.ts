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
  imagem_usuario: string = localStorage.getItem('imagemusuario');

  senha:String

  idusuario =Number(localStorage.getItem('idusuario'))
  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    var id = this.route.snapshot.params['id_usuario']
    this.findByIdUsuario(id)
  }
  findByIdUsuario (id:number) {
    this.usuariosService.getByIdUsuario(id).subscribe((resp:Usuario)=>{
      this.usuario=resp
    })
  }

  conferirSenha(event: any){
    this.senha = event.target.value;
  }
  
  salvar() {
    localStorage.setItem('cpfusuario', this.loginUsuario.cpfusuario)
    localStorage.setItem('emailusuario', this.loginUsuario.emailusuario)
    localStorage.setItem('nome', this.loginUsuario.nome)
    localStorage.setItem('cep', this.loginUsuario.cep)
    localStorage.setItem('complemento', this.loginUsuario.complemento)
    // localStorage.setItem('idusuario', this.loginUsuario.idusuario.toString())
    this.usuariosService.putUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario=resp
      this.router.navigate(['/perfil-vendedor', this.idusuario])
      // location.assign('/perfil-vendedor')
    })
  }
}
