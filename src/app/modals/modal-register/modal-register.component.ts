import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})

export class ModalRegisterComponent implements OnInit {
  register_form: FormGroup;
  email = '';
  password = '';

  // authService: any;

  persona: Persona = new Persona("", "","", "","", "","", "","", "","", "","", "");

  //Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder, private autenticarService: AuthService, private ruta: Router) {
    //Creamos el grupo de controles para el formulario de login
    this.register_form = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  ngOnInit(): void {
  }

  //estos son todos métodos
  /* get Username() {
    return this.register_form.get("username");
  }
  get UsernameInvalid() {
    return this.Username?.touched && !this.Username?.valid;
  } */
  get Mail() {
    return this.register_form.get("email");
  }
  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }
  get Password() {
    return this.register_form.get("password");
  }
  // ayuda mas adelante a cambiar el color del borde a rojo
  get PasswordInvalid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  onEnviar(event: Event) {
    //console.log(this.register_form);
    
    event.preventDefault();
    if (this.register_form.valid) {
      console.log(JSON.stringify(this.register_form.value));
      this.autenticarService.loginUser(this.register_form.value).subscribe(db => {
        console.log("DATA: " + JSON.stringify(db.id));
        if (db.id) {
          alert("Puedes editar el portfolio");
          this.ruta.navigate(['/dashboard']);
          this.register_form.reset()
        } else {
          alert("Error al iniciar sesión, credenciales no válidas!!!");
        }
      }, err => {
        alert("ERROR!!!");
      })
    } else {
      sessionStorage.setItem('currentUser', "");
      alert("Error! No tienes acceso");
      this.ruta.navigate(['/']);
    }


  }
  onReset(): void {

    this.register_form.reset();
  }
}
