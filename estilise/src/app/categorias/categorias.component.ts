import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/categoria';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listaCategorias: Categoria[]
  categoria: Categoria = new Categoria

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(){
    this.findAllCategorias(
    window.scroll(0,0)}

  findAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp;
    });
  }
  
  publicar(){  
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp;
      location.assign('/categorias')
    });
  }
}