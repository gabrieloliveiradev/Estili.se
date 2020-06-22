import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUsuario } from '../model/loginUsuario';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {

  email_usuario:String
  senha:String
  token:String

  constructor(private http: HttpClient) { }

  logar(usuario: loginUsuario) {
    return this.http.post('http://localhost:8080/usuarios/logar', usuario)
  }
}