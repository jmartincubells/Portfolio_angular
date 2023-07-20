import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = "https://portfoliobkd.onrender.com/persona/"
  constructor(private httpClient: HttpClient) { }

  // lista
  public list(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + 'lista');
  }
  //ver persona por id
  public verPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }

  //agregar persona
  public agregarPersona(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.url + 'crear', persona);
  }
  //borrar persona por id
  public eliminarPersona(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
  }
  //editar persona
  public updatePersona(persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.url + 'editar', persona);
  }

}
