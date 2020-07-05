import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto = new Produto
  usuario: Usuario = new Usuario


  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id =this.route.snapshot.params['id_produto']
    this.findByIdProduto(id)
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto)=>{
      this.produto = resp
    })
  }
  salvar(){
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      // this.router.navigate(['/produtos'])
    })
  }

}
