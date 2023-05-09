export class Curso {
    id?: number;
    titulo: string;
    descripcion: string;  
    fecha: string; 

constructor(titulo: string,descripcion: string, fecha:  string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
}
}
