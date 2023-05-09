export class Datopersonal {
    id?: number;
    nombreyapellido: string;
    domicilio: string;    
    barrio: string;
    disponibilidad: string;    
    estadocivil: string;
    fechanacimiento: string;
    contacto: string;
    alternativo: string;
    email: string;

   
constructor(nombreyapellido: string, domicilio: string, barrio: string, disponibilidad: string, estadocivil: string, fechanacimiento: string, contacto: string, alternativo: string, email: string) {
    this.nombreyapellido = nombreyapellido;
    this.domicilio = domicilio;
    this.barrio = barrio;
    this.disponibilidad = disponibilidad;
    this.estadocivil = estadocivil;
    this.fechanacimiento = fechanacimiento;
    this.contacto = contacto;
    this.alternativo = alternativo;
    this.email = email;

}
}
