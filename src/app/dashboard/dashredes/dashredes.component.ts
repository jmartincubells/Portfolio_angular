import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-dashredes',
  templateUrl: './dashredes.component.html',
  styleUrls: ['./dashredes.component.css']
})
export class DashredesComponent implements OnInit {
//Crear e inicializar variables de instancia para almacenar los datos con los que trata el Servicio
form: FormGroup;
redes: Red[]=[];

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private redService: RedService, private ruta: Router) { 
  //Creamos el grupo de controles para el formulario 
  this.form = this.formBuilder.group({
      
    id: [''],
    icono: ['', [Validators.required]],
    url: ['', [Validators.required]],
    
  })
  }
  get Url() {
    return this.form.get("url");
  }

  get UrlInvalido(){
    return this.Url?.errors && this.Url?.touched;
  }

  get UrlValido(){
    return !this.Url?.errors && this.Url?.touched;
  }

  get Icono() {
    return this.form.get("icono");
  }

  get IconoInvalido(){
    return this.Icono?.errors && this.Icono?.touched;
  }

  get IconoValido(){
    return !this.Icono?.errors && this.Icono?.touched;
  }

  listarItems(): void{
    this.redService.list().subscribe({
      next: (data) => {
        this.redes=data;
        console.log("Items cargados correctamente");
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
  })
}

  ngOnInit(): void {
    this.listarItems();
  }
  cargarItem(id: number){
    this.redService.verRed(id).subscribe({
        next: (data) => {
          this.form.setValue(data);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
    console.log("Se cargó correctamente el item");
    }
    guardarItem() {
      let item = this.form.value;
      if (item.id == '') {
        this.redService.agregarRed(item).subscribe({
          next: (data) => {
            this.limpiar();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        console.log("Se añadió correctamente el item");
      } else {
        this.redService.updateRed(item).subscribe({
          next: (data) => {
            this.limpiar();
          },
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
        window.location.reload();
        console.log("Se modificó correctamente el item");
      }
    }
    borrarItem(id: number) {
      if (confirm("Confirme si desea eliminar este ítem")) {
        this.redService.eliminarRed(id).subscribe(data => {});
        window.location.reload();
        console.log("Se eliminó correctamente el item");
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
