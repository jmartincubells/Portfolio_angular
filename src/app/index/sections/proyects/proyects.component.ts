import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

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
