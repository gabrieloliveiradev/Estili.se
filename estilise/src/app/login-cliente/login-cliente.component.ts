import { Component, OnInit } from '@angular/core';
import { LoginUsuarioService } from '../service/login-usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { loginUsuario } from '../model/loginUsuario';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  email_usuario: loginUsuario = new loginUsuario;

  constructor(private loginService: LoginUsuarioService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  Login(){
    this.loginService.logar(this.email_usuario).subscribe((resp: loginUsuario)=>{
      this.email_usuario = resp;
      localStorage.setItem("token", resp.token)
      localStorage.setItem("senha", resp.senha)
      localStorage.setItem("usuario", resp.email_usuario)
      localStorage.setItem("logado", "true")
      this.router.navigate(['/home'])
      location.assign('/home')
    }, (erro) => {
          alert("Email ou senha inválidos !")
       })
  } 
  
}
