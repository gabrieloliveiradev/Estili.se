import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { PerfilVendedorComponent } from '../perfil-vendedor/perfil-vendedor.component';
import { loginUsuario } from '../model/loginUsuario';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto = new Produto
  usuario: Usuario = new Usuario
  listaProdutos: Produto[]
  loginUsuario: loginUsuario = new loginUsuario

  idproduto = Number(localStorage.getItem("idproduto"))

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(){
    let id = this.route.snapshot.params['id']
    this.findAllProdutos()
    this.findByIdProduto(id)
  }
  findByIdProduto(idProduto: number){

    this.produtoService.getByIdProduto(idProduto).subscribe((resp: Produto)=>{
      this.produto = resp;
      localStorage.setItem('idproduto', String(this.produto.idproduto))
    });
  }

  findAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp;
    });
  }
  salvar(){
 
    this.produtoService.putProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp
      let idusuario = Number(localStorage.getItem("idusuario"))
      this.router.navigate(['/perfil-vendedor', idusuario])
    })
  }

}
