import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  
  // id_produto: string= localStorage.getItem('id_produto');
  // cor: string = localStorage.getItem('cor');
  // imagem1: string = localStorage.getItem('imagem1');
  // imagem2: string = localStorage.getItem('imagem2');
  // imagem3: string = localStorage.getItem('imagem3');
  // nome_produto: string = localStorage.getItem('nome_produto');
  // id_categoria: string = localStorage.getItem('id_categoria');
  // id_profissional: string = localStorage.getItem('id_profissional');
  
  listaProdutos: Produto[]
  listaCarrinho: Produto[]
  produto: Produto = new Produto
  listaUsuarios: Usuario[]
  alerta:boolean = false
  login: boolean = false
  mostrarPopupLogin: boolean = false
  constructor(private produtoService: ProdutoService, private router: Router) { }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp;
    });
  }
  ngOnInit() {
    this.findAllProdutos()
    let item:string = localStorage.getItem('deletarOk')
    window.scroll(0,0);
    
    if(item == "true"){
      this.alerta = true
      localStorage.clear()
      setTimeout(()=>{
        location.assign('/produtos')
      }, 3000)
    }
  }
  findAllCarrinho(){
    this.produtoService.getAllCarrinho().subscribe((resp: Produto[])=>{
      this.listaCarrinho = resp;
    });
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
  
  // ---------------- Ancora
  ancora(){
    let ancora = document.querySelector("#ancoradoNoArticle")
    if (ancora){
      ancora.scrollIntoView({ behavior: 'smooth'})
    }
    
  }
  publicarCarrinho(produto: Produto){
    produto.carrinho = localStorage.getItem("carrinho")
    this.produtoService.putProduto(produto).subscribe((resp: Produto)=>{
      alert(this.produto.idproduto)
      this.produto = resp
      alert("Produto adicionado ao carrinho")
    });
  }
  publicar(){  
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      // resp.nomeUsuario = localStorage.getItem('nome')
      this.produto = resp;
      location.assign('/produtos')
    });
  }
  findAllProduto(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp;
    });
  }
  findByIdProduto(idProduto: number){
    this.produtoService.getByIdProduto(idProduto).subscribe((resp: Produto)=>{
      this.produto = resp;
    });
  }
  
}
