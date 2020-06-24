import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar-produto',
  templateUrl: './deletar-produto.component.html',
  styleUrls: ['./deletar-produto.component.css']
})
export class DeletarProdutoComponent implements OnInit {

  produto: Produto = new Produto
  deletado:boolean = false
  constructor(private produtoService: ProdutoService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(){
    let id:number = this.route.snapshot.params['id']
    this.findById(id)
  }


  findById(id_produto:number){
    this.produtoService.getByIdProduto(id_produto).subscribe((resp: Produto)=>{
      this.produto = resp
    }, err =>{
      console.log(`Erro na busca do id cod: ${err.status}`)
    })
  }
  btnSim(){
    this.produtoService.deleteProduto(this.produto.id_produto).subscribe(()=>{
      this.deletado = true
      this.router.navigate(['/produtos'])
      localStorage.setItem("deletado", this.deletado.toString())
    })
  }
  btnNao(){
    this.router.navigate(['/produtos'])
  }

}

