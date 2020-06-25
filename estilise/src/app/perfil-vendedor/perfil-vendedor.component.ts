import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-perfil-vendedor',
  templateUrl: './perfil-vendedor.component.html',
  styleUrls: ['./perfil-vendedor.component.css']
})
export class PerfilVendedorComponent implements OnInit {  

  constructor() {  }

  ngOnInit(): void {
   
  }
  
url="../assets/img/icon/iconpig.png"

onselectFile (e)
{
if(e.target.files)
{
 var reader = new FileReader();
 reader.readAsDataURL(e.target.files[0]);
 reader.onload=(event:any)=> {this.url=event.target.result;
}
}
}
}
