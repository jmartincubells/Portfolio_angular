export class Experiencia {
    id?: number;
    puesto: string;
    inicio: string;
    fin: string;
    empresa: string;
    tareas: string;
    imagen: string;

//Constructor

    constructor(imagen: string,puesto: string,inicio: string, fin: string, empresa: string,tareas: string) {
        this.puesto = puesto;
        this.inicio = inicio;
        this.fin = fin;
        this.empresa = empresa;
        this.tareas = tareas;
        this.imagen = imagen;
    }
}
