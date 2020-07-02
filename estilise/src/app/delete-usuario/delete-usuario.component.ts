import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;
  deletarOk:boolean =false;

  constructor(private usuarioService: UsuariosService, private router: Router, private route: ActivatedRoute) { }
 

  ngOnInit(){
    let id : number = this.route.snapshot.params['id']
    this.findByIdUsuario(id)
  }

  findByIdUsuario(id:number){
    this.usuarioService.getByIdUsuario(id).subscribe((resp: Usuario)=>{
      this.usuario = resp
    }, err=>{
      console.log(`Erro ao passar o id: ${err.status}`)
    })
  }

  btnSim(){
    this.usuarioService.deleteUsuario(this.usuario.idusuario).subscribe(()=>{
      this.deletarOk = true
      this.router.navigate(['/perfil-cliente'])
      localStorage.setItem("deletarOk", this.deletarOk.toString())
    })
  }

}
