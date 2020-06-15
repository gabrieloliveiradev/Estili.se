import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  nome = '';
  email = '';
  telefone = '';
  assunto = '';
  comentario = '';
  bloco1 = false;
  bloco2 = true;
  bloco3 = true;

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
    }
  
  botao1 () {
    if (this.nome == '') {
      alert("Favor preenher todos os campos.");
    }
    else if (this.email == '') {
      alert("Favor preenher todos os campos.");
    }
    else if (this.telefone == '') {
      alert("Favor preenher todos os campos.");
    }
    else if (this.assunto == '') {
      alert("Favor preenher todos os campos.");
    }
    else {
    this.bloco1 = !this.bloco1;
    this.bloco2 = !this.bloco2;
  }}

  botao2 () {
    if (this.comentario == '') {
      alert("Favor escrever a sua mensagem.");
    }
    else {
    this.bloco2 = !this.bloco2;
    this.bloco3 = !this.bloco3;
    }
  }
}