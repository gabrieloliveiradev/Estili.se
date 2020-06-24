import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsuariosService } from '../service/usuarios.service';
import { AppComponent } from '../app.component';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  mostrarPopupCadastro: boolean = false
  mostrarPopupLogin: boolean = false



  constructor(private router: Router, private locationPage: Location, public auth: AuthService ) { }

  ngOnInit():void{
   
  }
 teste(){
  this.auth.popupCadastro()
 }
  // refresh(){
  //   this.router.navigateByUrl("/login-cliente", {skipLocationChange:true}).then(()=>{
  //    this.router.navigate([this.locationPage.path()])
  //   })
  // }
  popupCadastro(){
    this.mostrarPopupCadastro = true
  }
  popupLogin(){
    this.mostrarPopupLogin = true
    // this.refresh()
  }

  sair(){
    this.router.navigate(['/login'])
    localStorage.clear()
  }
  
 
}
