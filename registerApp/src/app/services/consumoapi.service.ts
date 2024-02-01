import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) }

  url: string = 'https://f1l1p0hx-5000.brs.devtunnels.ms/';
  tipoPerfil!: string;

  getAlumnoCurso(idProfesor:number,idCurso:number){
    return this.http.get<any>(this.url + '/profesores/' + idProfesor + '/cursos/' + idCurso)
  }

  obtenerCursosPorProfesor(idProfesor:number){
    return this.http.get<any>(this.url + '/profesores/' + idProfesor + '/cursos')
  }

  public obtenerAlumnosPorCurso(profesorId: number, cursoId: number) {
    return this.http.get<any[]>(this.url + 'profesores/' + profesorId + '/cursos/' + cursoId + '/alumnos', this.httpOptions);
  }

  login(usuario: string, pass: string) {Observable<any>
    const body = {
      user: usuario,
      password: pass
    };

    return this.http.post<any>(this.url + "login", body, { ...this.httpOptions, observe: 'response' });
  }
  
  constructor(private http:HttpClient) {}

  
  public getRepositories() {
    return this.http.get('https://raw.githubusercontent.com/Exequiel-Alvarado/RegisterApp-V2/main/registerApp/API_Test/api_test.py');
  }
  }