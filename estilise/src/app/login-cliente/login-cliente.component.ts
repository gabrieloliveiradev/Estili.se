import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { loginUsuario } from '../model/loginUsuario';
import { AuthService } from '../service/auth.service';
import { Usuario } from '../model/usuario';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {
  loginUsuario: loginUsuario = new loginUsuario;
  usuario: Usuario = new Usuario;
  profissional: string
  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(){
  }

  entrar(){

    this.authService.logar(this.loginUsuario).subscribe((resp: loginUsuario)=>{
      this.loginUsuario = resp;
      let profissional  = false
      localStorage.setItem('token', this.loginUsuario.token)
      localStorage.setItem('cpfusuario', this.loginUsuario.cpfusuario)
      localStorage.setItem('emailusuario', this.loginUsuario.emailusuario)
      localStorage.setItem('nome', this.loginUsuario.nome)
      localStorage.setItem('cartao_credito', this.loginUsuario.cartaocredito)
      localStorage.setItem('cep', this.loginUsuario.cep)
      localStorage.setItem('complemento', this.loginUsuario.complemento)
      // localStorage.setItem('numero_casa', this.loginUsuario.numero_casa)
      localStorage.setItem('imagem_usuario', this.loginUsuario.imagemusuario)
      //localStorage.setItem('data_nascimento', this.loginUsuario.data_nascimento)
      localStorage.setItem('especialidade', this.loginUsuario.especialidade)
      // localStorage.setItem('profissional', this.loginUsuario.profissional)
      localStorage.setItem('idusuario', this.loginUsuario.idusuario.toString())
      localStorage.setItem('profissional', this.loginUsuario.profissional)
      

      if(this.loginUsuario.profissional == "true"){
        location.assign('/editar-perfil-profissional')
        this.router.navigate(['/editar-perfil-profissional'])
        profissional = true
      }else{
        let idusuario = localStorage.getItem('idusuario')
        location.assign('/perfil-cliente')
        this.router.navigate(['/perfil-cliente', idusuario])
        profissional == false
      }
    }, err => {
          alert('Houve um erro ao entrar, verifique o email e a senha.')
       })
  } 
  
}
