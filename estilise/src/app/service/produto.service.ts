import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http:HttpClient) { }

  getAllProdutos (){
    return this.http.get('http://localhost:8080/produtos');
  }
  findBynome(nome_produto: String){
    return this.http.get(`http://localhost:8080/produtos/${nome_produto}`)
  }
  findByPreco(preco: number){
    return this.http.get(`http://localhost:8080/produtos/${preco}`);
  }
  postProduto(produto: Produto) {
    return this.http.post('http://localhost:8080/produtos', produto , { headers: { 'authorization': localStorage.getItem ('token') }})
  }
  putProduto(produto: Produto) {
    return this.http.put('http://localhost:8080/produtos', produto, { headers: { 'authorization': localStorage.getItem ('token') }})
  }
  getByIdProduto(id_produto:number) {
    return this.http.get(`http://localhost:8080/produtos/${id_produto}`)
  }
  deleteProduto(id_produto:number) {
    return this.http.delete(`http://localhost:8080/produtos/${id_produto}`, { headers: {'authorization': localStorage.getItem ('token') }})
  }
}
