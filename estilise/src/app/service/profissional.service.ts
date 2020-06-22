import { Injectable } from '@angular/core';
import { Profissional } from '../model/profissional';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http:HttpClient) { }

  getAllProfissionais (){
    return this.http.get('http://localhost:8080/profissionais');
  }
  postCadastro(profissional: Profissional) {
    return this.http.post('http://localhost:8080/profissionais', profissional);
  }
  putProfissional(profissional: Profissional) {
    return this.http.put('http://localhost:8080/profissionais', profissional);
  }
  getByIdProfissional(id:number) {
    return this.http.get(`http://localhost:8080/profissionais/${id}`)
  }
  deleteProfissional(id:number) {
    return this.http.delete(`http://localhost:8080/profissionais/${id}`)
  }
}
