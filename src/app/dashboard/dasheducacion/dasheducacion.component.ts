import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-dasheducacion',
  templateUrl: './dasheducacion.component.html',
  styleUrls: ['./dasheducacion.component.css']
})
export class DasheducacionComponent implements OnInit {
  form: FormGroup;
  id: number;
  educaciones: Educacion[] = [];
  initialDate: Date = new Date();
  constructor(private cdRef: ChangeDetectorRef, private formBuilder: FormBuilder ,private sEducacion: EducacionService) { 
    this.form = this.formBuilder.group({
      id: [],
      institucion: ["", [Validators.required]],
      inicio: ["", [Validators.required]],
      fin: ["", [Validators.required]],
      especialidad: ["", [Validators.required]],
      estado: ["", [Validators.required]]
      })
  }


  ngOnInit() {
    this.cargarEducacion();
    this.cdRef.detectChanges();
  }
  cargarEducacion(): void{
    this.sEducacion.list().subscribe(db =>{
      this.educaciones = db;
    })
    }
    cargarDetalle(id: number) {
      this.sEducacion.verEducacion(id).subscribe(
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
      let edu = this.form.value;
      console.log()
    
      if (edu.id == '') {
        this.sEducacion.agregarEducacion(edu).subscribe(
          data => {
            alert("Educación añadida correctamente");
            this.cargarEducacion();
            this.form.reset();
          }
        )
      } else {
        this.sEducacion.updateEducacion(edu).subscribe(
          data => {
            alert("Educación editada!!!");
            this.cargarEducacion();
            this.form.reset();
          }
        )
      }
    }
    borrar(id: number) {
      this.sEducacion.eliminarEducacion(id).subscribe(
        data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarEducacion();
          this.form.reset();
        },
        error => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarEducacion();
          this.form.reset();
        }
      )
    }

}
