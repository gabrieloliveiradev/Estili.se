import { Component, OnInit } from '@angular/core';
import { literal } from '@angular/compiler/src/output/output_ast';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-quemsomos',
  templateUrl: './quemsomos.component.html',
  styleUrls: ['./quemsomos.component.css']
})
export class QuemsomosComponent implements OnInit {

  faLinkedin = faLinkedin
  faGithub = faGithub
  constructor() { }

  ngOnInit(){
    const element = document.querySelector('h1');
    const element2 = document.querySelector('p');
    digitaTexto(element)
    digitaTexto2(element2)
  }
}


function digitaTexto(elemento) {
    const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML='';
    textoArray.forEach((letra, i) =>{
        setTimeout(()=>{

          elemento.innerHTML +=letra;

        }, 75 * i);

    })
    
  }
  function digitaTexto2(elemento) {
    const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML='';
    textoArray.forEach((letra, i) =>{
        setTimeout(()=>{

          elemento.innerHTML +=letra;

        }, 25 * i);

    })
    
  }
