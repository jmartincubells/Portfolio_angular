import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  proyectos: any;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datosService.getDatos().subscribe(info => {
      this.proyectos=info.proyectos;
      
    })
  }

}
