import { Component, OnInit } from '@angular/core';
import { Sobremi } from 'src/app/model/sobremi';
import { DatosService } from 'src/app/servicios/datos.service';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  sobremis: Sobremi[]=[] //se llama a la entidad
  

  constructor(private sService: SobremiService) { }//se llama al servicio

  ngOnInit(): void {
    this.cargarSobremi();
  }

   //llamamos a los métodos
   public cargarSobremi():void{   //no va a haber ningun retorno, solo una carga de datos
    this.sService.list().subscribe(db => {this.sobremis=db}); // uso el this porque esta fuera del método
  }

  public borrar(id:number){
    if(id != undefined){
      this.sService.eliminarSobremi(id).subscribe(
        data =>{
          this.cargarSobremi();
        }, err =>{
          alert("No se pudo eliminar la informacion")
        }
      )
    }
  }

} 
