import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { loginUsuario } from '../model/loginUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }
  
  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }
  
  getAllUsuarios(){
    return this.http.get('http://localhost:8080/usuarios', this.token);
  }
  postUsuario(usuario: Usuario) {
    return this.http.post('http://localhost:8080/usuarios', usuario, this.token);
  }
  putUsuario(usuario: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', usuario, this.token);
  }
  getByIdUsuario(id_usuario:number) {
    return this.http.get(`http://localhost:8080/usuarios/${id_usuario}`, this.token)
  }
  deleteUsuario(id_usuario:number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id_usuario}`, this.token)
  }
  getAllProfissional() {
    return this.http.get(`http://localhost:8080/usuarios/profissional/true`, this.token)
  }
  // profissionalPreenchido(){
  //   let preenchido = false;
  //   if(this.usuario.especialidade=="undefined" && this.usuario.cep=="undefined"){
  //     preenchido =true;
  //   }
  //   return preenchido;
  // }
 
}
