import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educacion: Educacion[]=[]; //se llama a la entidad
  

  constructor(private sService: EducacionService) { }//se llama al servicio

  ngOnInit(): void {
    this.cargarEducacion();
    
    
  }

   //llamamos a los métodos
    cargarEducacion():void{   //no va a haber ningun retorno, solo una carga de datos
      this.sService.list().subscribe(db => {this.educacion=db}); // uso el this porque esta fuera del método
      console.log(this.educacion);
  }

  public borrar(id:number){
    if(id != undefined){
      this.sService.eliminarEducacion(id).subscribe(
        data =>{
          this.cargarEducacion();
        }, err =>{
          alert("No se pudo eliminar la informacion")
        }
      )
    }
  } 

}
