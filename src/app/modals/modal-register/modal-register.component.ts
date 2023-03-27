import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {

  constructor() {}

  
  ngOnInit(): void {
    
  }

} 
/*
export class ModalRegisterComponent implements OnInit {
  login_form: FormGroup;

  email='';
  clave='';

  // persona: Persona = new Persona("", "", "", "", "", "");


  constructor(private formBuilder: FormBuilder, private autenService: AuthService, private ruta: Router) {
    // Creamos el grupo de controles para el formulario de login
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
   

  ngOnInit(): void {
    sessionStorage.setItem('currentUser', "");
  }

  // Métodos para obtener los controles del formulario y validarlos
  get Clave() {
    return this.login_form.get("clave");
  }

  get Email() {
    return this.login_form.get("email");
  }

  get ClaveValid() {
    return this.Clave?.touched && !this.Clave?.valid;
  }

  get EmailValid() {
    return this.Email?.touched && !this.Email?.valid;
  }


onEnviar(event: Event) {
  event.preventDefault;
  if (this.login_form.valid) {
    //console.log(JSON.stringify(this.login_form.value));
    this.autenService.login(this.login_form.value).subscribe(data => {
      console.log("DATA: " + JSON.stringify(data.id));
      if (data.id) {
        alert("Ingresando al portfolio");
        this.ruta.navigate(['aadmin']);
      } else {
        alert("Credenciales no válidas");
      }
    },  /* error => {
      alert("ERROR!!!"); 
    })
  } else {
    sessionStorage.setItem('currentUser', "");
    alert("Error! No tienes acceso");
    this.ruta.navigate(['/']);
  }
}


reset() {
  console.log("Se limpió el formulario");
  this.login_form.reset();
  this.ruta.navigate(['']);
}


back(){
  this.ruta.navigate(['/']);
}

}*/
