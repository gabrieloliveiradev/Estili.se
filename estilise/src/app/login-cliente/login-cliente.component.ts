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

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(){
  }

  entrar(){
    this.authService.logar(this.loginUsuario).subscribe((resp: loginUsuario)=>{
      this.loginUsuario = resp;
      localStorage.setItem('token', this.loginUsuario.token)
      localStorage.setItem('emailusuario', this.loginUsuario.emailusuario)
      location.assign('/perfil-cliente')
      this.router.navigate(['/produtos'])
    }, err => {
          alert('Houve um erro ao entrar, verifique o email e a senha.')
       })
  } 
  
}
