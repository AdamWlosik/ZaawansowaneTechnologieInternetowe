import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    //selector: 'number-pipe',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
export class AppComponent implements OnInit {
 title = 'Angulara';
 inputTekst = 'Przykładowy tekst'; 
 date = new Date();
 liczbaE = Math.E;
 osoba = new Osoba('Jan Nowak', 56);
 liczbaPI = Math.PI;
 any = [12, 'Adam', true, 10];

 title2 = 'Dni tygodnia';
 dniTygodnia = [ 
 'poniedziałek', 
 'wtorek', 
 'środa', 
 'czwartek', 
 'piątek', 
 'sobota', 
 'niedziela' 
 ];
 title3 = 'Lista osób';
 Osoba = [ 
    {imie: 'Adam ', wiek: 26, czyStudnet: true,},
    {imie: 'Pawel', wiek: 65, czyStudnet: false,},
    {imie: 'Paula ', wiek: 96, czyStudnet: true,},
    {imie: 'Marta ', wiek: 2, czyStudnet: true,},
    
 ];

 title4 = 'Dni tygodnia';
 dniTygodnia4 = [ 
 'poniedziałek', 
 'wtorek', 
 'środa', 
 'czwartek', 
 'piątek', 
 'sobota', 
 'niedziela' 
 ]; 
 stanAplikacji = ['start', 'koniec']; 

 osoby2: Osoba2[] = [];
 dodajOsoby() { 
 this.osoby2 = [
 new Osoba2('Kasia', 'Nowak', 24),
 new Osoba2('Tomasz', '', 66),
 new Osoba2('Andrzej', 'Wolny', 36)
 ]; 
 } 
 usunOsoby() { 
 this.osoby2 = [];
 } 

  

    title5 = 'projekt1'; 
    inputText = 'Moj input';
    zmienKolor = 'color-black'; 
    isDisabled = true;
    logo = ''; 
    htmlContent = '<i> Adam Włosik </i>'; 
    ngOnInit(): void { }
    zmienUstawienia() { 
    this.inputText = 'tekst zmieniony';
    this.zmienKolor = 'color-brown';
    this.isDisabled = false;
    this.logo = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
    } 
    getClass() { 
        return this.zmienKolor = 'color-green';
    }
        
    
} 
   

 


class Osoba2 {
    constructor(public imie: string, public nazwisko?: string, public wiek?: 
   number) { }
}

 
class Osoba {
 constructor(public imie: string, public wiek?: number) { }
} 
