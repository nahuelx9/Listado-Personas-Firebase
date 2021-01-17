import { LoginService } from './login/login.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
  constructor(private httpClient: HttpClient,
    private loginService: LoginService) { }

  cargarPersonas() {
    const token = this.loginService.getIdToke();
    return this.httpClient.get('https://listado-personas-f742b-default-rtdb.firebaseio.com/datos.json?auth=' + token);
  }

  //Guardar Personas
  guardarPersonas(personas: Persona[]) {
    const token = this.loginService.getIdToke();
    this.httpClient.put('https://listado-personas-f742b-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
      .subscribe(
        response => console.log("resultado de guardar las personas: " + response),
        error => console.log("Error al guardar persona:" + error));

  }

  modificarPersona(index: number, persona: Persona) {
    const token = this.loginService.getIdToke();
    let url: string;
    url = 'https://listado-personas-f742b-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.put(url, persona)
      .subscribe(
        response => console.log("resultado de modificar persona: " + response),
        error => console.log('Error en modificar Persona: ' + error)
      )
  }

  eliminarPersona(index:number) {
    const token = this.loginService.getIdToke();
    let url: string;
    url = 'https://listado-personas-f742b-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
    this.httpClient.delete(url)
      .subscribe(
        response => console.log("resultado de eliminar persona: " + response),
        error => console.log('Error en eliminar Persona: ' + error)
      )
  }

}

