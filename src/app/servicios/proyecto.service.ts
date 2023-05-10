import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url= "http://localhost:8080/proyectos/"
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.url + 'lista');
 } 

 public verProyectos(id: number): Observable<Proyectos> {
   return this.httpClient.get<Proyectos>(this.url + `ver/${id}`);
 }


 //agregar Proyectos
 public agregarProyectos(proyectos: Proyectos): Observable<any> {
   return this.httpClient.post<any>(this.url + 'crear', proyectos);
 }
 //borrar Proyectos por id
 public eliminarProyectos(id: number): Observable<any> {
   return this.httpClient.delete<any>(this.url + `borrar/${id}`);
 }
 //editar Proyectos
 public updateProyectos(proyectos: Proyectos): Observable<any> {
   return this.httpClient.put<any>(this.url + 'editar', proyectos);
 }

}
