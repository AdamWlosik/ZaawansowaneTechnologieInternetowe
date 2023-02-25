import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss'] 
 }) 
 export class AppComponent implements OnInit {
  osoba: Osoba;
  osobaForm: FormGroup;
  EMAIL = 'email' 
  wiek = [...Array(82).keys()].map(x => x + 18)
  // wypełnienie tablicy numerami od 18 do 99
  ngOnInit(): void {
  this.intData();
  this.initForm();
  } 
  initForm(): void {
  this.osobaForm = new FormGroup({
  imie: new FormControl(null, [Validators.required, Validators.minLength(3)]),
  nazwisko: new FormControl('Kowalski'),
  email: new FormControl(null, [Validators.required, Validators.email]),
  wiek: new FormControl(null, Validators.required),
  czyStudent: new FormControl(null, Validators.required),
  opis: new FormControl(this.osoba.opis),
  gender: new FormControl(true, Validators.required),
  }) 
  } 
  intData(): void {
  this.wiek.unshift(null); // dodaje element null na 1 pozycję tablicy
  this.osoba = new Osoba();
  this.osoba.opis = 'przykladowy opis';
  }
  onSubmit(): void {
  console.log('osobaForm:', this.osobaForm);
  this.osoba.imie = this.osobaForm.value.imie;
  this.osoba.nazwisko = this.osobaForm.value.nazwisko;
  this.osoba.email = this.osobaForm.get('email').value;
  this.osoba.wiek = this.osobaForm.get('wiek').value;
  this.osoba.czyStudent = this.osobaForm.get('czyStudent').value;
  this.osoba.opis = this.osobaForm.get('opis').value;
  this.osoba.gender = this.osobaForm.get('gender').value;
  console.log('osoba:', this.osoba);
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