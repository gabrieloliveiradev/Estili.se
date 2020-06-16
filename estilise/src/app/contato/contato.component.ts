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

  constructor() { }
  ngOnInit(){
    window.scroll(0,0)
    }
  
  botao1 () {
<<<<<<< HEAD
    this.nome = document.getElementById('nome').innerText;
    this.email = document.getElementById('email').innerText;
    this.telefone = document.getElementById('telefone').innerText;
    this.assunto = document.getElementById('assunto').innerText;
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
=======
>>>>>>> 7ef55999100156c57bb051041524d35e6fa9d750
    this.bloco1 = !this.bloco1;
    this.bloco2 = !this.bloco2;
  }

  botao2 () {
    this.bloco2 = !this.bloco2;
    this.bloco3 = !this.bloco3;
<<<<<<< HEAD
    }
  }  
=======
  }

>>>>>>> 7ef55999100156c57bb051041524d35e6fa9d750
}