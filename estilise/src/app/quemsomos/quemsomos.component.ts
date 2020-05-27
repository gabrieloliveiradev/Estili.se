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

  ngOnInit(): void {
  }
}
const element = document.querySelector('h1');

function digitaTexto(elemento) {
    const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML='';
    textoArray.forEach((letra, i) =>{
        setTimeout(()=>{

          elemento.innerHTML +=letra;

        }, 75 * i);

    })
  }
