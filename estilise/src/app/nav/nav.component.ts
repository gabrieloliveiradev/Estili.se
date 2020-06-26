import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  mostrarPopupCadastro: boolean = false
  mostrarPopupLogin: boolean = true

  constructor(private router: Router, public auth: AuthService ) { }

  ngOnInit(){}

  popupCadastro(){
    this.mostrarPopupCadastro = true
  }
  popupLogin(){
    this.mostrarPopupLogin = true
  }

  sair(){
    this.router.navigate(['/home'])  
    localStorage.clear() 
  }
  
}
