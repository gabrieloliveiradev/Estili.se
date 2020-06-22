import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public splash: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((eventoSplash)=>{
      if(eventoSplash instanceof NavigationStart){
        this.splash = true
      }
      if(eventoSplash instanceof NavigationEnd || eventoSplash instanceof NavigationCancel || eventoSplash instanceof NavigationError){
        this.splash = false
      }
    })
   }

  ngOnInit(){
    window.scroll(0,0)
  }

  
}
