import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profissional } from '../model/profissional';

@Injectable({
  providedIn: 'root'
})
export class LoginProfissionalService {

  emailprofissional:String
  senha:String

  constructor(private http: HttpClient) { }

  logar(profissional:Profissional){
    return this.http.post('http://localhost:8080/profissionais/logar', profissional)
  }

}
