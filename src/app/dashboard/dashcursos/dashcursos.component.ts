import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/model/curso';
import { CursoService } from 'src/app/servicios/curso.service';

@Component({
  selector: 'app-dashcursos',
  templateUrl: './dashcursos.component.html',
  styleUrls: ['./dashcursos.component.css']
})
export class DashcursosComponent implements OnInit {
  form: FormGroup;
  id: any;
  cursitos: Curso[] = [];
  initialDate: Date = new Date();
  
  constructor(private cdRef: ChangeDetectorRef, private formBuilder: FormBuilder,  private sCurso: CursoService) {
    //Creamos el grupo de controles para el formulario 
    this.form = this.formBuilder.group({
      id: [],
      titulo: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      fecha: ["", [Validators.required]]
      })
  
  }

  ngOnInit(): void {
    this.cargarCurso();
    this.cdRef.detectChanges();
  }

  cargarCurso(): void{
    this.sCurso.list().subscribe(db =>{
      this.cursitos = db;
    })
    }
    cargarDetalle(id: any) {
      this.sCurso.detail(id).subscribe(
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
      let curs = this.form.value;
      console.log()
    
      if (curs.id == '') {
        this.sCurso.save(curs).subscribe(
          data => {
            alert("Curso añadido correctamente");
            this.cargarCurso();
            this.form.reset();
          }
        )
      } else {
        this.sCurso.update(curs).subscribe(
          data => {
            alert("Curso editado!!!");
            this.cargarCurso();
            this.form.reset();
          }
        )
      }
    }
    borrar(id: any) {
      this.sCurso.delete(id).subscribe(
        data => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarCurso();
          this.form.reset();
        },
        error => {
          alert("se pudo eliminar satisfactoriamente");
          this.cargarCurso();
          this.form.reset();
        }
      )
    }

  
}
