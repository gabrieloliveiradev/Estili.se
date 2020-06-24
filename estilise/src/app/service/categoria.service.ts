import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http:HttpClient) { }

  getAllCategorias (){
    return this.http.get('http://localhost:8080/categorias');
  }
  postCategoria(categoria: Categoria) {
    return this.http.post('http://localhost:8080/categorias', categoria);
  }
  putCategoria(categoria: Categoria) {
    return this.http.put('http://localhost:8080/categorias', categoria);
  }
  getByIdCategoria(id:number) {
    return this.http.get(`http://localhost:8080/categorias/${id}`)
  }
  deleteCategoria(id:number) {
    return this.http.delete(`http://localhost:8080/categorias/${id}`)
  }
}
