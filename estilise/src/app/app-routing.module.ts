import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { PoliticaComponent } from './politica/politica.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CadClienteComponent } from './cad-cliente/cad-cliente.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PerfilVendedorComponent } from './perfil-vendedor/perfil-vendedor.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { EditarDeletarCategoriaComponent } from './editar-deletar-categoria/editar-deletar-categoria.component';
import { CategoriaPostComponent } from './categoria-post/categoria-post.component';
import { EditarPerfilClienteComponent } from './editar-perfil-cliente/editar-perfil-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { EditarPerfilProfissionalComponent } from './editar-perfil-profissional/editar-perfil-profissional.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'faq', component: FAQComponent},
  { path: 'quemsomos', component: QuemsomosComponent},
  { path: 'politica', component: PoliticaComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'produtos', component: ProdutoComponent},
  { path: 'categorias', component: CategoriasComponent },
  { path: 'profissionais', component: ProfissionaisComponent },
  { path: 'users', component: ListaUsuariosComponent},
  { path: 'editar', component: EditarPerfilClienteComponent},
  { path: 'editar/:id_usuario', component: EditarPerfilClienteComponent},
  { path: 'editar-perfil-profissional/:id_usuario', component: EditarPerfilProfissionalComponent},
  { path: 'cadastro-usuario', component: CadClienteComponent},
  { path:'deletar', component: DeleteUsuarioComponent},
  { path:'deletar/:id', component: DeleteUsuarioComponent},
  { path: 'perfil-vendedor/:id', component: PerfilVendedorComponent},
  { path: 'perfil-cliente', component: PerfilClienteComponent},
  { path: 'perfil-cliente/:id', component: PerfilClienteComponent},
  { path: 'categorias/:id', component: EditarDeletarCategoriaComponent },
  { path: 'postarcategoria', component: CategoriaPostComponent},
  { path: 'login', component: LoginClienteComponent},
  { path: 'cadastrar', component: CadClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


