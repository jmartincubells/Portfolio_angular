import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { DatosService } from 'src/app/servicios/datos.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades: Habilidad[]=[]; //se llama a la entidad
  

  constructor(private sService: HabilidadService) { }//se llama al servicio

  ngOnInit(): void {
    this.cargarHabilidad();
    
    
  }

   //llamamos a los métodos
   cargarHabilidad():void{   //no va a haber ningun retorno, solo una carga de datos
      this.sService.list().subscribe(db => {this.habilidades=db}); // uso el this porque esta fuera del método
      console.log(this.habilidades);
  }

  public borrar(id:number){
    if(id != undefined){
      this.sService.eliminarHabilidad(id).subscribe(
        data =>{
          this.cargarHabilidad();
        }, err =>{
          alert("No se pudo eliminar la informacion")
        }
      )
    }
  } 
}
