import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUsuario } from '../model/loginUsuario';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {

  // emailusuario:String
  // senha:String
  // token:String

  constructor(private http: HttpClient) { }

  // logar(loginUsuario: loginUsuario) {
  //   return this.http.post('http://localhost:8080/usuarios/logar', loginUsuario)
  // }
}
