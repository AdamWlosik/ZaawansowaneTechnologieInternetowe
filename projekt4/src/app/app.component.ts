import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  tekstWZmiennej = 'To jest tekst z pola z pliku .ts';
  tablica = ['BMW', 'Fiat', 'Opel', 'Toyota'];
 osoba: Osoba ;
 wiek = [...Array(82).keys()].map(x => x + 18)
 ngOnInit(): void {
 this.osoba = new Osoba();
 this.osoba.imie = 'Tomasz';
 this.osoba.czyStudent = true;
 this.osoba.wiek = 57;
 this.osoba.gender = 'male';
 } 
 sendForm(): void {
 console.log('osoba:', this.osoba)
 } 
} 
export class Osoba {
 imie: string ;
 nazwisko: string ;
 emial: string;
 wiek: number ;
 czyStudent: boolean ;
 opis: string ;
 gender: string ;
} 

