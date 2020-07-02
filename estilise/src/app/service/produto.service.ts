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

  getAllProdutos (){
    return this.http.get('http://localhost:8080/produtos', this.token);
  }
  findBynome(nome_produto: String){
    return this.http.get(`http://localhost:8080/produtos/${nome_produto}`, this.token)
  }
  findByPreco(preco: number){
    return this.http.get(`http://localhost:8080/produtos/${preco}`, this.token);
  }
  postProduto(produto: Produto) {
    return this.http.post('http://localhost:8080/produtos', produto , this.token)
  }
  putProduto(produto: Produto) {
    return this.http.put('http://localhost:8080/produtos', produto, this.token)
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
}
