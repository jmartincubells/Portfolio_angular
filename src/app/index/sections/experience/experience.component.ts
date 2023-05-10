import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia: Experiencia[]=[]; //se llama a la entidad
  

  constructor(private sService: ExperienciaService) { }//se llama al servicio

  ngOnInit(): void {
    this.cargarExperiencia();
    
    
  }

   //llamamos a los métodos
    cargarExperiencia():void{   //no va a haber ningun retorno, solo una carga de datos
      this.sService.list().subscribe(db => {this.experiencia=db}); // uso el this porque esta fuera del método
      console.log(this.experiencia);
  }

  public borrar(id:number){
    if(id != undefined){
      this.sService.eliminarExperiencia(id).subscribe(
        data =>{
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo eliminar la informacion")
        }
      )
    }
  } 
}
