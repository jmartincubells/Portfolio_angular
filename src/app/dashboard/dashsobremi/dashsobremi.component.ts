import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sobremi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/servicios/sobremi.service';

@Component({
  selector: 'app-dashsobremi',
  templateUrl: './dashsobremi.component.html',
  styleUrls: ['./dashsobremi.component.css']
})
export class DashsobremiComponent implements OnInit {
  form: FormGroup;
  id: any;
  info: string = '';
  imagen: string = '';
  fondo: string = '';
  sobremis: Sobremi[] = [];
  constructor(private formBuilder: FormBuilder, private sService: SobremiService) {
    this.form = this.formBuilder.group({
      id: [],
      info: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      fondo: ['', [Validators.required]]
      })
  }

  ngOnInit() {
    this.cargarSobremi();
  }
  cargarSobremi(): void {
    this.sService.list().subscribe(
      db => {
        this.sobremis = db;
      })
  }

  cargarDetalle(id: any) {
    this.sService.verSobremi(id).subscribe(
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
    let about = this.form.value;
    console.log()

    if (about.id == '') {
      this.sService.agregarSobremi(about).subscribe(
        db => {
          alert("Sobre mi añadido correctamente");
          this.cargarSobremi();
          this.form.reset();
        }
      )
    } else {
      this.sService.updateSobremi(about).subscribe(
        db => {
          alert("Sobremi editado!!!");
          this.cargarSobremi();
          this.form.reset();
        }
      )
    }
  }
  borrar(id: any) {
    this.sService.eliminarSobremi(id).subscribe(
      data => {
        alert("se pudo eliminar satisfactoriamente");
        this.cargarSobremi();
        this.form.reset();
      },
      error => {
        alert("se pudo eliminar satisfactoriamente");
        this.cargarSobremi();
        this.form.reset();
      }
    )
  }

}
