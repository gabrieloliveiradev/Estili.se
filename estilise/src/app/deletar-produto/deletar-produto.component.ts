import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  produto: Produto = new Produto
  usuario: Usuario = new Usuario
  deletado:boolean = false

  idproduto = localStorage.getItem("idproduto")
  constructor(private produtoService: ProdutoService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(){
    let id:number = this.route.snapshot.params['id_produto']
    this.findById(id)
  }


  findById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    }, err =>{
      console.log(`Erro na busca do id cod: ${err.status}`)
    })
  }
  
  btnSim(){
    let idproduto = Number(localStorage.getItem("idproduto"))
    this.produtoService.deleteProduto(idproduto).subscribe(()=>{
      let idusuario = Number(localStorage.getItem("idusuario"))
      this.router.navigate(['/perfil-vendedor', idusuario])
    })
  }
  btnNao(){
    this.router.navigate(['/produtos'])
  }

}

