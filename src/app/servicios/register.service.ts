import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url= "http://localhost:8080/register/"

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Register[]>{
    return this.httpClient.get<Register[]>(this.url + 'lista');
 } 

public verRegister(id: number): Observable<Register>{
    return this.httpClient.get<Register>(this.url + `ver/${id}`);
 }



public agregarRegister(register: Register): Observable<any>{
    return this.httpClient.post<any>(this.url + 'crear', register);
 }

public eliminarRegister(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.url + `borrar/${id}`);
 }

public updateRegister(register: Register): Observable<any>{
    return this.httpClient.put<any>(this.url + 'editar', register);
 }
}