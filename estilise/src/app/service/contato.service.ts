import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../model/contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http:HttpClient) { }

  getAllContatos (){
    return this.http.get('http://localhost:8080/contato');
  }
  postCadastro(contato: Contato) {
    return this.http.post('http://localhost:8080/contato', contato);
  }
  putContato(contato: Contato) {
    return this.http.put('http://localhost:8080/contato', contato);
  }
  getByIdContato(id:number) {
    return this.http.get(`http://localhost:8080/contato/${id}`)
  }
  deleteContato(id:number) {
    return this.http.delete(`http://localhost:8080/contato/${id}`)
  }
}
