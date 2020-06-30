import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';
import { Route } from '@angular/compiler/src/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../model/usuario';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';
import { loginUsuario } from '../model/loginUsuario';



@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.css']
})
export class PerfilVendedorComponent implements OnInit {  
  // emailusuario: string
  produto: Produto = new Produto;
  usuario : Usuario = new Usuario;
  // nome: string = localStorage.getItem('nome');
  // emailusuario: string = localStorage.getItem('emailusuario');
  // cpf_usuario: string = localStorage.getItem('cpf_usuario');
  // complemento: string = localStorage.getItem('complemento');
  // data_nascimento: string = localStorage.getItem('data_nascimento');
  // cep: string = localStorage.getItem('cep');
  // telefone: string = localStorage.getItem('telefone');
  // imagem_usuario: string = localStorage.getItem('imagem_usuario');
  // cartao_credito: string = localStorage.getItem('cartao_credito');
  // id_usuario: string = localStorage.getItem('id_usuario');
  // numero_casa: string = localStorage.getItem('numero_casa');
  // profissional:string = localStorage.getItem('profissional');
  // especialidade: string = localStorage.getItem('especialidade');
  loginUsuario : loginUsuario = new loginUsuario
  login: boolean = false
  mostrarPopupLogin: boolean = false
  
  constructor(private usuarioService: UsuariosService,private produtoService: ProdutoService, private http: HttpClient, private route: ActivatedRoute, private router: Router) {  }
  fecharPopup(){
    let teste = ((<HTMLInputElement>document.querySelector(".modal-backdrop.show")))
    teste.style.display = 'none'
  }
  ngOnInit(): void {
    var id = this.route.snapshot.params['id']
    this.findByIdUsuario(id)
    
    // this.emailusuario = localStorage.getItem('emailusuario');
    let token = localStorage.getItem('token');
    // let cpf_usuario = localStorage.getItem('cpf_usuario');
    
    if(token == null){
      this.login = true
      alert('Faça o login antes de acessar a página feed')
      this.mostrarPopupLogin = true
      // this.router.navigate(['/home'])
      this.fecharPopup() 
    }
  }
  
  findByIdUsuario (id:number) {
    this.usuarioService.getByIdUsuario(id).subscribe((resp:Usuario)=>{
      this.usuario=resp
    })
  }
  publicar(){  
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto)=>{
      this.produto = resp;
      alert("Produto cadastrado")
    });
  }
  // typescript do cartão de crédito
  substituirnumero(){
    let numerocartao = document.getElementById('numerocartao')
    let inputnumero = ((<HTMLInputElement>document.getElementById("inputnumero")).value)
    // alert(inputnumero)
    numerocartao.innerHTML = inputnumero;
  }
  substituirnome(){
    let nomecartao= document.getElementById('nomecartao')
    let inputnome= ((<HTMLInputElement>document.getElementById("inputnome")).value)
    nomecartao.innerHTML = inputnome;
  }
  substituirvalidade(){
    let validadeMes = document.getElementById("validadeMes")
    let validadeAno = document.getElementById("validadeAno")
    let selectMes = ((<HTMLSelectElement>document.getElementById("selectMes")).value)
    let selectAno = ((<HTMLSelectElement>document.getElementById("selectAno")).value)
    validadeMes.innerHTML = selectMes;
    validadeAno.innerHTML = selectAno;
  }
  
}



