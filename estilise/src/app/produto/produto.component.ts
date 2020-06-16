import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scroll(0,0);
  }

  // ---------------- Ancora
 ancora(){
  let ancora = document.querySelector("#ancoradoNoArticle")
  if (ancora){
      ancora.scrollIntoView({ behavior: 'smooth'})
  }
  
 }


}
