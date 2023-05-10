import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { DatosService } from 'src/app/servicios/datos.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  sobremis: Persona[]=[]; //se llama a la entidad
  

  constructor(private sService: PersonaService) { }//se llama al servicio

  ngOnInit(): void {
    this.cargarSobremi();
    
    
  }

   //llamamos a los métodos
    cargarSobremi():void{   //no va a haber ningun retorno, solo una carga de datos
      this.sService.list().subscribe(db => {this.sobremis=db}); // uso el this porque esta fuera del método
      console.log(this.sobremis);
  }

  public borrar(id:number){
    if(id != undefined){
      this.sService.eliminarPersona(id).subscribe(
        data =>{
          this.cargarSobremi();
        }, err =>{
          alert("No se pudo eliminar la informacion")
        }
      )
    }
  } 

} 
