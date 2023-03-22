import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // datos que voy a pedir al JSON
  skills: any;
  more_skills: any;
  soft_skills: any;
  
  constructor(private datosService: DatosService) {}

  
  ngOnInit(): void {
    // Almacenar los datos en variables
    this.datosService.getDatos().subscribe(info => {
      this.skills=info.skills;
      this.more_skills=info.skill_extra;
      this.soft_skills=info.soft_skills;
      
    })
  }

}
