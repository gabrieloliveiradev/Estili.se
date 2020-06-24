import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-deletar-categoria',
  templateUrl: './editar-deletar-categoria.component.html',
  styleUrls: ['./editar-deletar-categoria.component.css']
})
export class EditarDeletarCategoriaComponent implements OnInit {
  
  categoria: Categoria = new Categoria
  deletarOk:boolean =false;


  constructor(private categoriaService:CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id']
    this.findByIdCategoria(id)
  }

  findByIdCategoria (id:number) {
    this.categoriaService.getByIdCategoria(id).subscribe((resp:Categoria)=>{
      this.categoria=resp
    })
  }
  salvar () {
    this.categoriaService.putCategoria(this.categoria).subscribe((resp:Categoria)=>{
      this.categoria=resp
      this.router.navigate(['/produto'])
      location.assign('/produto')
    })
  }

  btnSim(){
    this.categoriaService.deleteCategoria(this.categoria.id_categoria).subscribe(()=>{
      this.deletarOk = true
      this.router.navigate(['/categorias'])
      localStorage.setItem("deletarOk", this.deletarOk.toString())
    })
  }
  btnNao(){
    this.router.navigate(['/home'])
    location.assign('/home')
  }
}
