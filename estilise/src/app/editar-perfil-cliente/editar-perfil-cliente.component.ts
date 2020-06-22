import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil-cliente',
  templateUrl: './editar-perfil-cliente.component.html',
  styleUrls: ['./editar-perfil-cliente.component.css']
})
export class EditarPerfilClienteComponent implements OnInit {

  usuario: Usuario = new Usuario

  constructor(private usuariosService: UsuariosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    var id = this.route.snapshot.params['id']
    this.findByIdUsuario(id)
  }

  findByIdUsuario (id:number) {
    this.usuariosService.getByIdUsuario(id).subscribe((resp:Usuario)=>{
      this.usuario=resp
    })
  }
  salvar() {
    this.usuariosService.putUsuario(this.usuario).subscribe((resp:Usuario)=>{
      this.usuario=resp
      this.router.navigate(['/perfil-cliente'])
      location.assign('/perfil-cliente')
    })
  }

}
