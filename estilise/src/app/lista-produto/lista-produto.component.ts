import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {


  produto: Produto = new Produto
  listaProdutos: Produto[]
  login: boolean = false
  mostrarPopupLogin: boolean = false
  constructor(private produtoService: ProdutoService, private router: Router) { }
  

  ngOnInit(){
    this.findAllProduto()
  }

  fecharPopup(){
    let teste = ((<HTMLInputElement>document.querySelector(".modal-backdrop.show")))
    teste.style.display = 'none'
  }
acesso(){
  let token = localStorage.getItem('token')
  if(token == null){
    alert('Faça o login antes de acessar os produtos !!!')
    this.login = true
    this.fecharPopup()
    this.router.navigate(['/home'])
    this.mostrarPopupLogin = true
  }else{
    this.mostrarPopupLogin = false
  }
}

  findAllProduto(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp;
    });
  }

}
