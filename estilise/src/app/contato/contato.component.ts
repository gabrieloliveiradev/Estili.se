import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  bloco1 = false;
  bloco2 = true;
  bloco3 = true;
  formulario1 = true;
  formulario2 = true;
  formulario3 = true;
  formulario4 = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  botao1 () {
    this.bloco1 = !this.bloco1;
    this.bloco2 = !this.bloco2;
  }

  botao2 () {
    this.bloco2 = !this.bloco2;
    this.bloco3 = !this.bloco3;
  }

}