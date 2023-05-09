export class Experiencia {
    id?: number;
    puesto: string;
    inicio: string;
    fin: string;
    empresa: string;
    tareas: string;

//Constructor

    constructor(puesto: string,inicio: string, fin: string, empresa: string,tareas: string) {
        this.puesto = puesto;
        this.inicio = inicio;
        this.fin = fin;
        this.empresa = empresa;
        this.tareas = tareas;
    }
}
