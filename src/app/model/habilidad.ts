export class Habilidad {
    id?: number;
    lenguaje: string;
    porcentaje: number;    
   

   
constructor(lenguaje: string, porcentaje: number) {
    this.lenguaje = lenguaje;
    this.porcentaje = porcentaje;
}
}
