import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
   url= "https://portfoliobkd.onrender.com/experiencia/"
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Experiencia[]>{
     return this.httpClient.get<Experiencia[]>(this.url + 'lista');
  }
  public verExperiencia(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
 }

 public agregarExperiencia(experiencia: Experiencia): Observable<any>{
  return this.httpClient.post<any>(this.url + 'crear', experiencia);
}

public eliminarExperiencia(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}

public updateExperiencia(experiencia: Experiencia): Observable<any>{
  return this.httpClient.put<any>(this.url + 'editar', experiencia);
}

}
