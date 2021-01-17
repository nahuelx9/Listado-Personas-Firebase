import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    firebase.default.initializeApp({
      apiKey: "AIzaSyCt9gvdyiO8XnI51NOQctIpUXoPoclNXaI",
      authDomain: "listado-personas-f742b.firebaseapp.com",
    })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();

  }


  salir(){
    this.loginService.logout();
  }



}
