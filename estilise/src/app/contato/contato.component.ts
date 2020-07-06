import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  nome = "";
  email = "";
  telefone = "";
  assunto = "";
  mensagem = "";
  bloco1 = false;
  bloco2 = true;
  bloco3 = true;

  constructor() { }
  ngOnInit() {
    }
  
  botao1 () {
    let nome = ((<HTMLInputElement>document.getElementById("nome")).value)
    let email = ((<HTMLInputElement>document.getElementById("inputemail")).value)
    let telefone = ((<HTMLInputElement>document.getElementById("telefone")).value)
    let assunto = ((<HTMLInputElement>document.getElementById("assunto")).value)
    if ( nome == "" || email == "" || telefone == "" || assunto == "") {
      alert("Favor preencher todos os campos.");
    } else {
    this.bloco1 = !this.bloco1;
    this.bloco2 = !this.bloco2;
    }
  }

  botao2 () {
    let mensagem = ((<HTMLInputElement>document.getElementById("mensagem")))
    if (mensagem.value == "") {
      alert("Favor, preencha o campo com a sua mensagem.");
    } else {
    this.bloco2 = !this.bloco2;
    this.bloco3 = !this.bloco3;
    }
  }
}