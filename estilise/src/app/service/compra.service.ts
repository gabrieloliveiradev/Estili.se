import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from '../model/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http:HttpClient) { }

  getAllCompras (){
    return this.http.get('http://localhost:8080/compra');
  }
  postCompra(compra: Compra) {
    return this.http.post('http://localhost:8080/compra', compra);
  }
  putCompra(compra: Compra) {
    return this.http.put('http://localhost:8080/compra', compra);
  }
  getByIdCompra(id:number) {
    return this.http.get(`http://localhost:8080/compra/${id}`)
  }
  deleteCompra(id:number) {
    return this.http.delete(`http://localhost:8080/compra/${id}`)
  }
}
