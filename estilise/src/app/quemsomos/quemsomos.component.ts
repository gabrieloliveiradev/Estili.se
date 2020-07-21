import { Component, OnInit } from '@angular/core';
import { literal } from '@angular/compiler/src/output/output_ast';
import {faLinkedin, faAccessibleIcon} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-quemsomos',
  templateUrl: './quemsomos.component.html',
  styleUrls: ['./quemsomos.component.css']
})
export class QuemsomosComponent implements OnInit {

  faLinkedin = faLinkedin
  faGithub = faGithub
  
  constructor() {}

  ngOnInit(): void {
    const element = document.getElementById('tituloHeader');
    const element2 = document.getElementById('texto');
    this.digitaTexto(element)
    this.digitaTexto2(element2)
  }
  ancoraMissao(){
    let ancora = document.querySelector("#ancoradoNaMissao")
    if (ancora){
      // window.scroll(800,800)
      ancora.scrollIntoView({ behavior: 'smooth'})
    }
    
  }
  ancoraVisao(){
    let ancora = document.querySelector("#ancoradoNaVisao")
    if (ancora){
      ancora.scrollIntoView({ behavior: 'smooth'})
    }
    
  }
  ancoraValores(){
    let ancora = document.querySelector("#ancoradoEmValores")
    if (ancora){
      ancora.scrollIntoView({ behavior: 'smooth',})

    }
    
  }


  digitaTexto(elemento) {
      const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML='';
      textoArray.forEach((letra, i) =>{
          setTimeout(()=>{

            elemento.innerHTML +=letra;

          }, 75 * i);

      })
      
    }
  digitaTexto2(elemento) {
    const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML='';
    textoArray.forEach((letra, i) =>{
        setTimeout(()=>{

          elemento.innerHTML +=letra;

        }, 25 * i);

    })
    
  }
}
