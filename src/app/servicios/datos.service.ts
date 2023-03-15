import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
 // el nombre getjson es unicamente un ejemplo, puede ser cualquier nombre
  constructor(private getjson: HttpClient) { }

  getDatos():Observable<any> {

    return this.getjson.get('./assets/db/datos.json')
  }
}
