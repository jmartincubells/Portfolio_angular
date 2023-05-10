import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banner: Persona[]=[]; //se llama a la entidad
  

  constructor(private sService: PersonaService) { }//se llama al servicio

  ngOnInit(): void {
    this.cargarSobremi();
    
    
  }

   //llamamos a los métodos
    cargarSobremi():void{   //no va a haber ningun retorno, solo una carga de datos
      this.sService.list().subscribe(db => {this.banner=db}); // uso el this porque esta fuera del método
      console.log(this.banner);
  }
}
