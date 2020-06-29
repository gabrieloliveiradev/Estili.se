import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuariosService } from '../service/usuarios.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css']
})
export class ProfissionaisComponent implements OnInit {
  usuario : Usuario = new Usuario
  listaProfissional: Usuario[]

  // imagem_usuario: string = localStorage.getItem('imagem_usuario');
  // cep: string = localStorage.getItem('cep');
  // especialidade: string = localStorage.getItem('especialidade');
  // nome: string = localStorage.getItem('nome');
  // profissional:string = localStorage.getItem('profissional');
  constructor(public authService:AuthService, public usuarioService:UsuariosService) { }
  
  ngOnInit(): void {
    // if(profissional == true){
    //   listaProfissionais = Profissional[]
    // }
    this.findAllProfissional()
    // if(this.usuario.especialidade == undefined){
    //   alert(this.usuario.especialidade)
    //   // this.usuario.especialidade = "Sem especialidades"
    //   let SemEspecialidade = "Sem Especialidades"
    //   let ParagrafoEspecialidade = document.getElementById("ParagrafoEspecialidade")
    //   ParagrafoEspecialidade.innerHTML = SemEspecialidade
    // }
  }
  findAllProfissional(){
    this.usuarioService.getAllProfissional().subscribe((resp: Usuario[])=>{
      this.listaProfissional = resp;
    });
  }
  
}