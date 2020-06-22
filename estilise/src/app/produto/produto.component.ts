import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  
  listaProdutos: Produto[]
  produto: Produto = new Produto
  alerta:boolean = false

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllProdutos
    let item:string = localStorage.getItem('deletarOk')
    window.scroll(0,0);

    if(item == "true"){
      this.alerta = true
      localStorage.clear()
      setTimeout(()=>{
        location.assign('/produto')
      }, 3000)
    }
  }

  // ---------------- Ancora
 ancora(){
  let ancora = document.querySelector("#ancoradoNoArticle")
  if (ancora){
      ancora.scrollIntoView({ behavior: 'smooth'})
  }

 }

 findAllProdutos(){
  this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
    this.listaProdutos = resp;
  });
}

publicar(){  
  this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
    this.produto = resp;
    location.assign('/produto')
  });
}
 


}
