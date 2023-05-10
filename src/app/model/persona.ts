export class Persona {

    id?: number;
    nombre: string;
    apellido: string;    
    edad: string;
    banner: string;    
    titulo: string;
    email: string;
    password: string;
    domicilio: string
    fechanacimiento: string;
    contacto: string;
    barrio: string;
    disponibilidad: string;
    info: string;
    nivel: string;

    //Constructor
   
constructor(nombre: string,domicilio: string,fechanacimiento: string,contacto: string
    ,barrio: string,disponibilidad: string,apellido: string, edad: string, banner: string,titulo: string, email: string,
    password: string, info: string, nivel: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.banner = banner;
    this.titulo = titulo;
    this.email = email;
    this.password = password;
    this.domicilio = domicilio;
    this.barrio = barrio;
    this.disponibilidad = disponibilidad;
    this.fechanacimiento = fechanacimiento;
    this.contacto = contacto;
    this.info = info;
    this.nivel = nivel;
}
}
