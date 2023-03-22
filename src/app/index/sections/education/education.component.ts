import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  estudios: any;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {

    this.datosService.getDatos().subscribe(datos => {
      this.estudios=datos.estudios;
    })
  }

}
