import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-post',
  templateUrl: './categoria-post.component.html',
  styleUrls: ['./categoria-post.component.css']
})
export class CategoriaPostComponent implements OnInit {

  categoria: Categoria = new Categoria

  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var id = this.route.snapshot.params['id']
  }

  publicar(){  
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=>{
      this.categoria = resp;
      location.assign('/categorias')
    });
  }
}
