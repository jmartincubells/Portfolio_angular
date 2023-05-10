export class Proyectos {
    id?: number;
    imagen: string;
    proyecto: string;    
   descripcion: string;
   urlGithub: string;

   
constructor(imagen: string, proyecto: string, urlGithub: string, descripcion: string) {
    this.imagen = imagen;
    this.proyecto = proyecto;
    this.descripcion = descripcion;
    this.urlGithub = urlGithub;
}
}
