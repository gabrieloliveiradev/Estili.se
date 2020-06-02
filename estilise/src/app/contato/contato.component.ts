import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  nome = '';
  nomeVermelho = true;
  email = '';
  telefone = '';
  assunto = '';
  comentario = '';
  bloco1 = false;
  bloco2 = true;
  bloco3 = true;

  constructor() { }

  ngOnInit(): void {
    }
  
  botao1 () {
    if (this.nome == '') {
      this.nomeVermelho = false;
    }
    else if (this.email == '') {

    }
    else if (this.telefone == '') {

    }
    else if (this.assunto == '') {

    }
    else {
    this.bloco1 = !this.bloco1;
    this.bloco2 = !this.bloco2;
  }}

  botao2 () {
    if (this.comentario == '') {

    }
    else {
    this.bloco2 = !this.bloco2;
    this.bloco3 = !this.bloco3;
    }
  }
}