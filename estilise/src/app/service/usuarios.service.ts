import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http:HttpClient) { }

  getAllUsuarios(){
    return this.http.get('http://93.188.161.223:9000/user');
  }
  postCadastro(usuario: Usuario) {
    return this.http.post('http://93.188.161.223:9000/user', usuario);
  }
}
