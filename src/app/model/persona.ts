export class Persona {

    id?: number;
    nombre: string;
    apellido: string;    
    edad: string;
    banner: string;    
    titulo: string;
    email: string;
    password: string;

    //Constructor
   
constructor(nombre: string,apellido: string, edad: string, banner: string,titulo: string, email: string,
    password: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.banner = banner;
    this.titulo = titulo;
    this.email = email;
    this.password = password;
}
}
