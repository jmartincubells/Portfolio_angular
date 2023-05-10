import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datopersonal } from '../model/datopersonal';

@Injectable({
  providedIn: 'root'
})
export class DatopersonalService {
  url= "http://localhost:8080/datopersonal/"
  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Datopersonal[]>{
    return this.httpClient.get<Datopersonal[]>(this.url + 'lista');
 } 

public verDatopersonal(id: number): Observable<Datopersonal>{
    return this.httpClient.get<Datopersonal>(this.url + `ver/${id}`);
 }



public agregarDatopersonal(datopersonal: Datopersonal): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', datopersonal);
 }

public eliminarDatopersonal(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
 }

public updateDatopersonal(datopersonal: Datopersonal): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', datopersonal);
 }

}
