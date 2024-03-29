import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  getDatos():Observable<any> {
    // se llama al json
    return this.http.get('./assets/db/datos.json')
  }
}
