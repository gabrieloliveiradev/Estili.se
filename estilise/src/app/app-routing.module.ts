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
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { EditarPerfilClienteComponent } from './editar-perfil-cliente/editar-perfil-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';

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
  { path: 'editar/:id', component: EditarPerfilClienteComponent},
  { path: 'perfil-cliente', component: PerfilClienteComponent},
  { path:' deletar', component: DeleteUsuarioComponent},
  { path:' deletar/:id', component: DeleteUsuarioComponent},
  { path:' login', component: LoginClienteComponent},
  { path: 'cadastrar', component: CadClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
