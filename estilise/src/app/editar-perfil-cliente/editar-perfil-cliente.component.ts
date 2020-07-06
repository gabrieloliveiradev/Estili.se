import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { loginUsuario } from '../model/loginUsuario';

@Component({
  selector: 'app-editar-perfil-cliente',
  templateUrl: './editar-perfil-cliente.component.html',
  styleUrls: ['./editar-perfil-cliente.component.css']
})
export class EditarPerfilClienteComponent implements OnInit {

  usuario: Usuario = new Usuario
  imagem_usuario: string = localStorage.getItem('imagemusuario');
  loginUsuario: loginUsuario = new loginUsuario
  senha:String

  idusuario =Number(localStorage.getItem('idusuario'))
  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    var id = this.route.snapshot.params['idusuario']
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

      // let idusuario = this.loginUsuario.idusuario
      // this.router.navigate(['/perfil-cliente', idusuario])

    })
  }

  // salvarImagem(){
    
  //   this.usuariosService.putUsuario(this.loginUsuario).subscribe((resp:loginUsuario)=>{
  //     // this.loginUsuario.imagem_usuario=resp.imagem_usuario
  //     localStorage.setItem('imagem_usuario', this.loginUsuario.imagem_usuario)
  //     this.usuario.imagem_usuario=localStorage.getItem('imagem_usuario')
  //     this.router.navigate(['/perfil-cliente'])
  //     location.assign('/perfil-cliente')
  //   })
  // }
  // salvarImagem(){
    
  //   this.usuariosService.putUsuario(this.loginUsuario).subscribe(()=>{
  //     localStorage.setItem('imagem_usuario', this.loginUsuario.imagem_usuario)
  //     // alert(this.loginUsuario.imagem_usuario)
  //     this.loginUsuario.imagem_usuario=localStorage.getItem('imagem_usuario')
  //     this.router.navigate(['/perfil-cliente'])
  //     location.assign('/perfil-cliente')
  //   })
  // }

}
