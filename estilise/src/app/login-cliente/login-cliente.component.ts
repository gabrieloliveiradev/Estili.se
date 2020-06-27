import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { loginUsuario } from '../model/loginUsuario';
import { AuthService } from '../service/auth.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {
  loginUsuario: loginUsuario = new loginUsuario;
  usuario: Usuario = new Usuario;
  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(){
  }

  entrar(){

    this.authService.logar(this.loginUsuario).subscribe((resp: loginUsuario)=>{
      this.loginUsuario = resp;
      localStorage.setItem('token', this.loginUsuario.token)
      localStorage.setItem('cpf_usuario', this.loginUsuario.cpf_usuario)
      localStorage.setItem('emailusuario', this.loginUsuario.emailusuario)
      localStorage.setItem('nome', this.loginUsuario.nome)
      localStorage.setItem('cartao_credito', this.loginUsuario.cartao_credito)
      localStorage.setItem('cep', this.loginUsuario.cep)
      localStorage.setItem('complemento', this.loginUsuario.complemento)
      localStorage.setItem('numero_casa', this.loginUsuario.numero_casa)
      localStorage.setItem('imagem_usuario', this.loginUsuario.imagem_usuario)
      //localStorage.setItem('data_nascimento', this.loginUsuario.data_nascimento)
      localStorage.setItem('especialidade', this.loginUsuario.especialidade)
      //localStorage.setItem('profissional', this.loginUsuario.profissional)
      
      location.assign('/perfil-cliente')
      this.router.navigate(['/perfil-cliente'])
    }, err => {
          alert('Houve um erro ao entrar, verifique o email e a senha.')
       })
  } 
  
}
