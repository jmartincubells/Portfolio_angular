import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  
  // datos que voy a pedir al JSON
  nombre: string = "";
  sobre_mi: string = "";
  edad: any;
  nivel: any;

  // inyecto el servicio
  constructor(private datosService: DatosService) {}

  
  ngOnInit(): void {
    // Almacenar los datos en variables
    this.datosService.getDatos().subscribe(info => {
      this.nombre=info.nombre;
      this.sobre_mi=info.sobre_mi;
      console.log(this.sobre_mi);
    })
  }

} 
