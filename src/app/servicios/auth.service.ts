import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url ="https://portfoliobkd.onrender.com/persona/login"; // Aquí se define la URL base de la API
  currentUserSubject: BehaviorSubject<any>;

  constructor(private http:HttpClient) {
    console.log("Está corriendo el servicio de autenticación");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }
  loginUser(credenciales: any): Observable<any> {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post<any>(this.url, credenciales, httpOptions).pipe(map(db => {
      sessionStorage.setItem('currentUser', JSON.stringify(db));
      this.currentUserSubject.next(db);
      console.log("Servicio esta corriendo" + JSON.stringify(db));
      return db;
    }));
  }
  get usuarioAutenticado() {
    return this.currentUserSubject.value;
  }
 
}
