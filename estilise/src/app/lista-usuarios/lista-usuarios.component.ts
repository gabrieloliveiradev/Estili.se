import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  listaUsuario: Usuario[]
  usuario: Usuario = new Usuario()

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit() {
    this.findAllUsuarios()
  }
  findAllUsuarios() {
    this.usuariosService.getAllUsuarios().subscribe((resp:Usuario[])=>{
      this.listaUsuario = resp
    })
  }
}
