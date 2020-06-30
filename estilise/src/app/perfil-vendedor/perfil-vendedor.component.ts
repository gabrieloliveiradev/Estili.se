import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Route } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../model/usuario';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';



@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.css']
})
export class PerfilVendedorComponent implements OnInit {  

  usuario: Usuario = new Usuario;
  produto: Produto = new Produto;


  constructor(private usuarioService: UsuariosService,private produtoService: ProdutoService, private http: HttpClient, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id']
    this.findByIdUsuario(id)
  }

  findByIdUsuario (id:number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp:Usuario)=>{
      this.usuario=resp
    })
  }
  publicar(){  
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp;
      alert("Produto cadastrado")
    });
  }
}
  


