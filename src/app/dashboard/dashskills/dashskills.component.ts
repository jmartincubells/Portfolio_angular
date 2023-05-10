import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-dashskills',
  templateUrl: './dashskills.component.html',
  styleUrls: ['./dashskills.component.css']
})
export class DashskillsComponent implements OnInit {
 //Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
 form: FormGroup;
 skills: Habilidad[]=[];
 lenguaje: any;
 id:any;
  constructor(
    //Inyectar el Servicio para tener acceso en la clase a los Métodos
    private http: HttpClient,
    private hService: HabilidadService,
    private formBuilder: FormBuilder,
    private ruta: Router
    ) { 
      this.form = this.formBuilder.group({
        id: [''],
        lenguaje: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
        porcentaje: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]]
      });
    }
    get Habilidad() {
      return this.form.get("habilidad");
    }
  
    get HabilidadInvalido(){
      return this.Habilidad?.errors && this.Habilidad?.touched;
    }
  
    get HabilidadValido(){
      return !this.Habilidad?.errors && this.Habilidad?.touched;
    }
  
    get Porcentaje() {
      return this.form.get("porcentaje");
    }
  
    get PorcentajeInvalido(){
      return this.Porcentaje?.errors && this.Porcentaje?.touched;
    }
  
    get PorcentajeValido(){
      return !this.Porcentaje?.errors && this.Porcentaje?.touched;
    }
    
    listarItems(): void{
      this.hService.list().subscribe({
        next: (data) => {
          this.skills=data;
          console.log("Items cargados correctamente");
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
    })
  }
  
    
    ngOnInit(): void {
      this.listarItems();
    }

    cargar(id: any){
      this.hService.verHabilidad(id).subscribe({
          next: (data) => {
            this.form.setValue(data);
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
      console.log("Se cargó correctamente el item");
      }

      guardar() {
        let item = this.form.value;
        if (item.id == '') {
          this.hService.agregarHabilidad(item).subscribe({
            next: (data) => {
              this.limpiar();
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
          });
          window.location.reload();
          console.log("Se añadió correctamente la habilidad");
        } else {
          this.hService.updateHabilidad(item).subscribe({
            next: (data) => {
              this.limpiar();
            },
            error: (e) => console.error(e),
            complete: () => console.info('complete')
          });
          window.location.reload();
          console.log("Se modificó correctamente la habilidad");
        }
      }

      borrar(id: any) {
        if (confirm("Confirme si desea eliminar este ítem")) {
          this.hService.eliminarHabilidad(id).subscribe(data => {});
          window.location.reload();
          console.log("Se eliminó correctamente la habilidad");
        }
      }
           
      limpiar() {
        console.log("Se limpió el formulario");
        this.form.reset();
      }
    
      volver(){
        this.ruta.navigate(['/dashboard']);
      }
    
  
}
