import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FAQComponent } from './faq/faq.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PoliticaComponent } from './politica/politica.component';
import { QuemsomosComponent } from './quemsomos/quemsomos.component';
import { ProdutoComponent } from './produto/produto.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CadClienteComponent } from './cad-cliente/cad-cliente.component';
import { LoginClienteComponent } from './login-cliente/login-cliente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PerfilVendedorComponent } from './perfil-vendedor/perfil-vendedor.component'
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component'
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { DeletarProdutoComponent } from './deletar-produto/deletar-produto.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { EditarDeletarCategoriaComponent } from './editar-deletar-categoria/editar-deletar-categoria.component';
import { CategoriaPostComponent } from './categoria-post/categoria-post.component';
import { EditarPerfilClienteComponent } from './editar-perfil-cliente/editar-perfil-cliente.component';
import { NgxMaskModule } from 'ngx-mask';
import { EditarPerfilProfissionalComponent } from './editar-perfil-profissional/editar-perfil-profissional.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    FAQComponent,
    NavComponent,
    FooterComponent,
    PoliticaComponent,
    QuemsomosComponent,
    ProdutoComponent,
    ListaUsuariosComponent,
    CadClienteComponent,
    LoginClienteComponent,
    DeleteUsuarioComponent,
    CategoriasComponent,
    PerfilVendedorComponent,
    PerfilClienteComponent,
    ProfissionaisComponent,
    DeletarProdutoComponent,
    EditarProdutoComponent,
    EditarDeletarCategoriaComponent,
    CategoriaPostComponent,
    EditarPerfilClienteComponent,
    EditarPerfilProfissionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }