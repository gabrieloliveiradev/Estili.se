import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Usuario } from '../model/usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario: Usuario = new Usuario

  constructor(private usuarioService:UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id']
    this.findByIdUsuario(id)
  }
  findByIdUsuario (id:number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp:Usuario)=>{
      this.usuario=resp
    })
  }
  salvar () {
    this.usuarioService.putUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario=resp
      this.router.navigate(['/users'])
      location.assign('/users')
    })
  }

}
