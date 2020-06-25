import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})

export class CategoriasComponent implements OnInit {

  id_categoria: string = localStorage.getItem('id_categoria');
  descricao: string = localStorage.getItem('descricao');
  imagem_categoria: string = localStorage.getItem('imagem_categoria');
  nome_categoria: string = localStorage.getItem('nome_categoria');

  listaCategorias: Categoria[]
  categoria: Categoria = new Categoria

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(){
    this.findAllCategorias()
    window.scroll(0,0)
  }

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp;
    });
  }
}