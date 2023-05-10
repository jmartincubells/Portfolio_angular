import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Datopersonal } from 'src/app/model/datopersonal';
import { DatopersonalService } from 'src/app/servicios/datopersonal.service';

@Component({
  selector: 'app-dashdatosper',
  templateUrl: './dashdatosper.component.html',
  styleUrls: ['./dashdatosper.component.css']
})
export class DashdatosperComponent implements OnInit {
  form: FormGroup;
  id?: number;
  datosper: Datopersonal[] = [];
  constructor(private formBuilder: FormBuilder , private dpService: DatopersonalService) { 
    this.form = this.formBuilder.group({
      id: [],
      nombreyapellido: ['', [Validators.required]],
      domicilio: ['', [Validators.required]],
      barrio: ['', [Validators.required]],
      disponibilidad: ['', [Validators.required]],
      estadocivil: ['', [Validators.required]],
      fechanacimiento: ['', [Validators.required]],
      contacto: ['', [Validators.required]],
      alternativo: ['', [Validators.required]],
      email: ['', [Validators.required]]
      })
  }

  ngOnInit() {
    this.cargarDPersonal();
  }
  cargarDPersonal(): void{
    this.dpService.list().subscribe(db =>{
      this.datosper = db;
    })
    }
    cargarDetalle(id: number) {
      this.dpService.verDatopersonal(id).subscribe(
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
      let dper = this.form.value;
      console.log()
    
      if (dper.id == '') {
        this.dpService.agregarDatopersonal(dper).subscribe(
          data => {
            alert("Datos personales añadidos correctamente");
            this.cargarDPersonal();
            this.form.reset();
          }
        )
      } else {
        this.dpService.updateDatopersonal(dper).subscribe(
          data => {
            alert("Datos personales editados!");
            this.cargarDPersonal();
            this.form.reset();
          }
        )
      }
    }

    borrar(id: number) {
      this.dpService.eliminarDatopersonal(id).subscribe(
        data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarDPersonal();
          this.form.reset();
        },
        error => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarDPersonal();
          this.form.reset();
        }
      )
    }
  
}
