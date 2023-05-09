import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';
import { DatopersonalService } from '../../servicios/datopersonal.service';
import { EducacionService } from '../../servicios/educacion.service';
import { ExperienciaService } from '../../servicios/experiencia.service';
import { HabilidadService } from '../../servicios/habilidad.service';
import { PersonaService } from '../../servicios/persona.service';
import { RedService } from '../../servicios/red.service';
import { SobremiService } from '../../servicios/sobremi.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
