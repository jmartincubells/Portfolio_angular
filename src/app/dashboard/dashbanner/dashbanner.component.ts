import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-dashbanner',
  templateUrl: './dashbanner.component.html',
  styleUrls: ['./dashbanner.component.css']
})
export class DashbannerComponent implements OnInit {
  form: FormGroup;
  id: any;
  personas: Persona[] = [];
  

  constructor(private formBuilder: FormBuilder, private pService: PersonaService) {
    this.form = this.formBuilder.group({
      id: [],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      banner: ['', [Validators.required]],
      titulo: ['', [Validators.required]]
      })
  }

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void{
    this.pService.list().subscribe(
      db => {
        this.personas = db;
      }
    )
  }
  cargarDetalle(id: any) {
    this.pService.verPersona(id!).subscribe(
      {
        next: (db) => {
          this.form.setValue(db);
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
    console.log("FUNCIONA!!!")
    let perso = this.form.value;
    console.log()

    if (perso.id == '') {
      this.pService.agregarPersona(perso).subscribe(
        db => {
          alert("Persona añadida correctamente");
          this.cargarPersona();
          this.form.reset();
        }
      )
    } else {
      this.pService.updatePersona(perso).subscribe(
        db => {
          alert("Persona editada!!!");
          this.cargarPersona();
          this.form.reset();
        }
      )
    }
  }

  borrar(id: any) {
    this.pService.eliminarPersona(id).subscribe(
      db => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarPersona()
        this.form.reset();
      },
      error => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarPersona();
          this.form.reset();
      })
  }


}
