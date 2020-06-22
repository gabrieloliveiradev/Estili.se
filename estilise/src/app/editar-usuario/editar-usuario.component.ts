import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})

export class EditarUsuarioComponent implements OnInit {
  
  usuario: Usuario = new Usuario

  constructor(private usuarioService:UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    var id = this.route.snapshot.params['id']
    this.findByIdUsuario(id)
  }
  findByIdUsuario (id_usuario:number) {
    this.usuarioService.getByIdUsuario(id_usuario).subscribe((resp:Usuario)=>{
      this.usuario=resp
    })
  }
  salvar() {
    this.usuarioService.putUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario=resp
      this.router.navigate(['/users'])
      location.assign('/users')
    })
  }

}
