import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-dashexpe',
  templateUrl: './dashexpe.component.html',
  styleUrls: ['./dashexpe.component.css']
})
export class DashexpeComponent implements OnInit {
  form: FormGroup;
  id: number;
  experiencias: Experiencia[] = [];
  initialDate: Date = new Date();
  constructor(private cdRef: ChangeDetectorRef, private formBuilder: FormBuilder,private sExperiencia: ExperienciaService) {
    //Creamos el grupo de controles para el formulario 
    this.form = this.formBuilder.group({
      id: [],
      puesto: ["", [Validators.required]],
      inicio: ["", [Validators.required]],
      fin: ["", [Validators.required]],
      empresa: ["", [Validators.required]],
      tareas: ["", [Validators.required]]
      })
  }

  ngOnInit() {
    this.cargarExperiencia();
    this.cdRef.detectChanges();
  }
 cargarExperiencia(): void{
this.sExperiencia.list().subscribe(db =>{
  this.experiencias = db;
})
}

cargarDetalle(id: number) {
  this.sExperiencia.verExperiencia(id).subscribe(
    {
      next: (data) => {
        this.form.setValue(data);
      },
      error: (e) => {
        console.error(e)
        alert("error al modificar")
      },
      complete: () => console.info('complete aqui')
    }
  )
}
guardar() {
  console.log("Funciona!")
  let expe = this.form.value;
  console.log()

  if (expe.id == '') {
    this.sExperiencia.agregarExperiencia(expe).subscribe(
      data => {
        alert("Experiencia añadida correctamente");
        this.cargarExperiencia();
        this.form.reset();
      }
    )
  } else {
    this.sExperiencia.updateExperiencia(expe).subscribe(
      data => {
        alert("Experiencia editada!!!");
        this.cargarExperiencia();
        this.form.reset();
      }
    )
  }
}
borrar(id: number) {
  this.sExperiencia.eliminarExperiencia(id).subscribe(
    data => {
      alert("se pudo eliminar satisfactoriamente");
      this.cargarExperiencia();
      this.form.reset();
    },
    error => {
      alert("se pudo eliminar satisfactoriamente");
      this.cargarExperiencia();
      this.form.reset();
    }
  )
}

}
