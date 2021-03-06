import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  }

  getAllProdutos(){
    return this.http.get('http://localhost:8080/produtos', this.token);
  }
  findBynome(nomeProduto: String){
    return this.http.get(`http://localhost:8080/produtos/nomeProduto/${nomeProduto}`, this.token)
  }
  findByPreco(preco: number){
    return this.http.get(`http://localhost:8080/produtos/${preco}`, this.token);
  }
  postProduto(produto: Produto) {
    return this.http.post('http://localhost:8080/produtos', produto , this.token)
  }
  putProduto(produto: Produto) {
    return this.http.put('http://localhost:8080/produtos', produto)
  }
  getByIdProduto(id_produto:number) {
    return this.http.get(`http://localhost:8080/produtos/${id_produto}`, this.token)
  }
  deleteProduto(id_produto:number) {
    return this.http.delete(`http://localhost:8080/produtos/${id_produto}`, this.token)
  }
  getAllCarrinho() {
    return this.http.get(`http://localhost:8080/produtos/carrinho/true`, this.token)
  }
  getByIdUsuario(idUsuario:number) {
    return this.http.get(`http://localhost:8080/produtos/idusuario/${idUsuario}`, this.token)
  }
  findByCategoria(categoria:String) {
    return this.http.get(`http://localhost:8080/produtos/categoria/${categoria}`, this.token)
  }
}
