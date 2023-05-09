import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {
  url= "https://localhost:8080/sobremi/"
  constructor(private httpClient:HttpClient) { }

  // lista
public list(): Observable<Sobremi[]>{
  return this.httpClient.get<Sobremi[]>(this.url + 'lista');
} 
//ver sobremi por id
public verSobremi(id: number): Observable<Sobremi>{
  return this.httpClient.get<Sobremi>(this.url + `ver/${id}`);
}

//agregar sobremi
public agregarSobremi(sobremi: Sobremi): Observable<any>{
  return this.httpClient.post<any>(this.url + 'crear', sobremi);
}
//borrar sobremi por id
public eliminarSobremi(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.url + `borrar/${id}`);
}
//editar sobremi
public updateSobremi(sobremi: Sobremi): Observable<any>{
  return this.httpClient.put<any>(this.url + 'editar', sobremi);
}

}
