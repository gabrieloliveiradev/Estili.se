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
  loginUsuario: loginUsuario = new loginUsuario

  senha:String

  
  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    var id = this.route.snapshot.params['id']
    this.findByIdUsuario(id)
    // localStorage.setItem('token', this.loginUsuario.token)
    // localStorage.setItem('cpf_usuario', this.loginUsuario.cpf_usuario)
    // localStorage.setItem('emailusuario', this.loginUsuario.emailusuario)
    // localStorage.setItem('nome', this.loginUsuario.nome)
    // localStorage.setItem('cartao_credito', this.loginUsuario.cartao_credito)
    // localStorage.setItem('cep', this.loginUsuario.cep)
    // localStorage.setItem('complemento', this.loginUsuario.complemento)
    // localStorage.setItem('numero_casa', this.loginUsuario.numero_casa)
  }
  fecharPopup(){
    location.assign('/editar')
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
    this.usuariosService.putUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario=resp
      this.router.navigate(['/perfil-cliente'])
      location.assign('/perfil-cliente')
    })
  }

}
