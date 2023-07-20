import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../model/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  url= "https://portfoliobkd.onrender.com/curso/"
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(this.url + 'lista');
 } 

public detail(id: number): Observable<Curso>{
    return this.httpClient.get<Curso>(this.url + `ver/${id}`);
 }



public save(curso: Curso): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', curso);
 }

public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
 }

public update(curso: Curso): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', curso);
 }


}
