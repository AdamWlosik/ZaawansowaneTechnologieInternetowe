import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 }) 
 export class AppComponent implements OnInit {
  osoba: Osoba;
  wiek = [...Array(82).keys()].map(x => x + 18)
  // wypełnienie tablicy numerami od 18 do 99
  ngOnInit(): void {
  this.wiek.unshift(null); // dodaje element null na 1 pozycję tablicy
  this.osoba = new Osoba();
  this.osoba.imie = 'Tomasz';
  this.osoba.czyStudent = true;
  // this.osoba.wiek = 57;
  this.osoba.gender = 'male';
  } 
  sendForm(osobaForm: NgForm): void {
  console.log('osobaForm:', osobaForm)
  } 
  send() { 
  console.log('osoba:', this.osoba)
  }
  imieChanged(imie: NgModel): void {
  console.log('imie model:', imie)
  }
 } 
 export class Osoba {
  imie: string;
  nazwisko: string;
  email: string;
  wiek: number;
  czyStudent: boolean;
  opis: string;
  gender: string;
 } 