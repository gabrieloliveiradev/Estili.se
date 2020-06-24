import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';
import { loginUsuario } from '../model/loginUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  getAllUsuarios(){
    return this.http.get('http://localhost:8080/usuarios');
  }
  postUsuario(usuario: Usuario) {
    return this.http.post('http://localhost:8080/usuarios', usuario);
  }
  putUsuario(usuario: Usuario) {
    return this.http.put('http://localhost:8080/usuarios', usuario);
  }
  getByIdUsuario(id:number) {
    return this.http.get(`http://localhost:8080/usuarios/${id}`)
  }
  deleteUsuario(id:number) {
    return this.http.delete(`http://localhost:8080/usuarios/${id}`)
  }

 
}
