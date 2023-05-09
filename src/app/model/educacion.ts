export class Educacion {
    
    id?: number;
    institucion: string;
    inicio: string;    
    fin: string;
    especialidad: string;
    estado: string;
    

constructor(institucion: string,inicio: string, fin: string, especialidad: string, estado: string) {
        this.institucion = institucion;
        this.inicio = inicio;
        this.fin = fin;
        this.especialidad = especialidad;
        this.estado = estado;
    }
    
}
