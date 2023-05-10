import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = "http://localhost:8080/educacion/"
  constructor(private httpClient: HttpClient) { }

  // lista
  public list(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.url + 'lista');
  }
  //ver educacion por id
  public verEducacion(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.url + `ver/${id}`);
  }


  //agregar educacion
  public agregarEducacion(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', educacion);
  }
  //borrar educacion por id
  public eliminarEducacion(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  //editar educacion
  public updateEducacion(educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.url + 'editar', educacion);
  }
}
