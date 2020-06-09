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
import { EditarComponent } from './editar/editar.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'faq', component: FAQComponent},
  { path: 'quemsomos', component: QuemsomosComponent},
  { path: 'politica', component: PoliticaComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'produto', component: ProdutoComponent},
  { path: 'categorias', component: CategoriasComponent },
  { path: 'users', component: ListaUsuariosComponent},
  { path: 'editar', component: EditarComponent},
  { path: 'editar/:id', component: EditarComponent},
  { path: 'cadastro-usuario', component: CadClienteComponent},
  { path:'deletar', component: DeleteUsuarioComponent},
  { path:'deletar/:id', component: DeleteUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
