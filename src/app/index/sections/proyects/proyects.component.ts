import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { DatosService } from 'src/app/servicios/datos.service';
import { ProyectosService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectos: Proyectos[]=[]; //se llama a la entidad
  

  constructor(private sService: ProyectosService) { }//se llama al servicio

  ngOnInit(): void {
    this.cargarProyectos();
    
    
  }

   //llamamos a los métodos
   cargarProyectos():void{   //no va a haber ningun retorno, solo una carga de datos
      this.sService.list().subscribe(db => {this.proyectos=db}); // uso el this porque esta fuera del método
      console.log(this.proyectos);
  }

  public borrar(id:number){
    if(id != undefined){
      this.sService.eliminarProyectos(id).subscribe(
        data =>{
          this.cargarProyectos();
        }, err =>{
          alert("No se pudo eliminar la informacion")
        }
      )
    }
  } 

}
