import { Component, OnInit } from '@angular/core';
import { LoginUsuarioService } from '../service/login-usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { loginUsuario } from '../model/loginUsuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  loginUsuario: loginUsuario = new loginUsuario;

  constructor(private loginService: LoginUsuarioService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  entrar(){
    this.authService.logar(this.loginUsuario).subscribe((resp: loginUsuario)=>{
      this.loginUsuario = resp;
      localStorage.setItem('token', this.loginUsuario.token)
      this.router.navigate(['/produtos'])
    }, err => {
          alert('Houve um erro ao entrar, verifique o email e a senha.')
       })
  } 
  
}
