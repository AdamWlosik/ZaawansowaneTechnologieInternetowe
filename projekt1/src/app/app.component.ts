import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// ćw3

/*export class AppComponent implements OnInit {
  title = 'projekt1';

  ngOnInit(): void {
    console.log('Witaj świecie!!!');
  }
}*/

// ćw3 zad1 i 2

/*export class AppComponent implements OnInit {
  // zmienna globalna dla komponentu
  title = 'projekt1';
  zmienna2: any;
  ngOnInit(): void {
  console.log('Witaj świecie!!!');
  console.log(this.title);
  const stala = 'to jest stała której już nie idzie zmienić';
  console.log('stala:', stala);
  const x = 2
  console.log('number x:', x);
  const y = 4
  console.log('number y:', y);

  let zmienna1 = '';
  zmienna1 = 'Pusty tekst';
  zmienna1 = 'to jest zmienna którą można zmieniać w obrębie metody';
  console.log('zmienna1:', zmienna1);
  let wynik = '';
  wynik = String(x + y)
  console.log('wynik dodawanie = ', wynik)
  console.log('wynik odejmowanie = ', wynik = String(y - x))
  console.log('wynik mnożenie = ', wynik = String(y * x))
  console.log('wynik dzielenie = ', wynik = String(y / x))
  
  let zmienna2 = '';
  zmienna2 = 'tekst test';
  let tekstLaczony = `przykładowy teks ${zmienna1},przykładowy teskt ${this.zmienna2} koniec`;
  console.log(tekstLaczony);
  console.log(`przykładowy tekst ${zmienna1} przykładowy teskt ${this.zmienna2}
  koniec`); 

  }
}*/

// ćw4 zad1 i zad2

/*export class AppComponent implements OnInit {
  liczba1: number = 2 ; // trzeba przypisać wartości
  liczba2 = 4;
  tekst1: string = 'Ala ma psa'; // trzeba przypisać wartości
  tekst2 = 'Ala ma kota';
  isPrawda1: boolean = true; // trzeba przypisać wartości
  isPrawda2 = false;
  coKolwiek: any;
  aktualnaGodzina: Date = new Date(); // aktualny czas
  tablica1: Array<number> = new Array<number>();
  tablica2: Array<string> = new Array<string>(); // trzeba przypisać wartości
  tablica3: number[] = [1, 2, 4, 4, 7]; // number[] równoważny z Array<number>
  tablica4: string[] = ['a']; // trzeba przypisać wartości
  tablicaAny1: Array<any> = new Array<any>();
  tablicaAny2 = [1, 'aaa', true, false, 555, null];
  ngOnInit(): void {
  this.liczba1 = 99.4;
  console.log('liczba1', this.liczba1);
  console.log('liczba2', this.liczba2);
  this.tekst1 = 'Kot ma Alę';
  console.log('tekst1', this.tekst1);
  console.log('tekst2', this.tekst2);
  this.coKolwiek = false;
  console.log('coKolwiek', this.coKolwiek);
  this.coKolwiek = 11;
  console.log('coKolwiek', this.coKolwiek);
  }
 }*/

 // ćw5 zad1 i zad2

 /*export class AppComponent implements OnInit {
  ngOnInit(): void {
  const imie = 'Adam';
  const nazwisko = 'Włosik'
  let wiek = 26
  this.wpiszTekst1(imie, nazwisko, wiek);
  this.wpiszTekst1(imie, nazwisko,);

  const liczba1 = 4
  const liczba2 = 2
  this.suma(liczba1, liczba2)
  console.log(this.suma(liczba1, liczba2));
  
 
  }
  wpiszTekst1(imie: string, nazwisko: string, wiek?: number): void {
  console.log(imie, nazwisko, wiek);
  }

  suma(liczba1: number, liczba2: number): number {
    return liczba1 + liczba2;
  }
}*/

// zad3

/*
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    const x = 2
    const y = 'Funkcja 4 przyjmuje 2 paramerty i nie zwraca nic x= '
    const z = 'Funkcja 5 przyjmuje 2 argumenty i je zwraca x= '

    funkcja1();
    console.log(funkcja2());
    console.log(funkcja3(x));
    funkcja4(x, y);
    console.log(funkcja5(z, x));
  }
}
export function funkcja1() : void {
  console.log('Funkcja 1 nie zwraca nic')
}
export function funkcja2() : string {
  return 'Funkcja 2 zwraca napis'
}
export function funkcja3(x: number) : string{
  return 'Funkcja 3 przyjmuje parametr x jako number i zwraca go jako string x= ' + String(x);
}
export function funkcja4(x: number, y: string) : void {
  console.log(y, x);
}
export function funkcja5(z: string, x: number) : string {
  return `${z} ${x}`;
}
export function funkca6(x: number) : void {
  console.log(`Funkcaj 6 przyjmuje 1 parametr x= ${x} i nie zwraca nic`);
}*/

//cw6 

/*export class AppComponent implements OnInit { 
  // deklaracja zmiennych
  liczba1: number | undefined; 
  text1: string | undefined; 
  isDisable1: boolean | undefined; 
  // deklaracja z inicjalizacją
  liczba2 = 6; 
  text2 = 'moj tekst'; 
  isDisable2 = false; 
  // tablice pare sposobów na deklaracje
  tablica1: Array<string>; 
  tablica3 = []; 
  tablica2: Array<any> = new Array<any>(); 
  tablica4 = [1, 2, 3, true, 'moj tekst']; 
  constructor() { 
  // inicjalizacja tablica1
  this.tablica1 = new Array<string>(); 
  } 
  ngOnInit() { 
  // console log wyświetla wartość w konsoli przeglądarki
  console.log('liczba2:', this.liczba2); 
  this.liczba1 = 1; 
  this.liczba1 += 1; 
  this.liczba1 += 1 + 2; 
  console.log('liczba1:', this.liczba1); 
  // Wywołanie funkcji
  this.wyswietlText1('a'); 
  this.isDisable2 = this.aktywne(); 
  this.wyswietlText1('b'); 
  } 
  // Metoda
  wyswietlText1(value: string): void { 
  if (this.isDisable2 === true) { 
  console.log('tablica ' + value, this.tablica4); 
  } else { 
  console.log('brak danych'); 
  } 
  } 
  aktywne(): boolean { 
  return true; 
  } 
 }*/

 // zad1 i zad2  cw 6

/*export class AppComponent implements OnInit {
  
  imie: string | undefined; 
  nazwisko: string | undefined;
  wiek: number | undefined;

  tablica = [9, 6, 0, 1, 1, 0, 0, 3, 0, 5, 2];
  
  
  ngOnInit() {
    
    this.imie = 'Adam'
    this.nazwisko = 'Włosik'
    this.wiek = 26
    console.log(this.imie, this.nazwisko, this.wiek)
    
    console.log(this.pesel(this.tablica));
  }
  
  pesel(tablica: Array<number>) {
    if(this.tablica[9] + this.tablica[10] % 2 == 0 ) {
      console.log('tablica', this.tablica);
      return true;
    } else {
      console.log('tablica', this.tablica)
      return false;
      
    }
  }
}*/

// cw 7
/*export class AppComponent implements OnInit { 
 
  osoba: Osoba | undefined; // deklaracja
  
  mojTyp = { // inicjalizacja zmiennej bez określenia jej typu
  id: 0, 
  imie: 'Roman', 
  nazwisko: 'Nowak' 
  }; 
  
  listaOsob1: Osoba[] = []; // deklaracja i inicjalizacja pustą tablicą []
  listaOsob2: Osoba[] = [ // deklaracja z inicjalizacją
  { 
  id: 23, 
  imie: 'Bożena' 
  }, 
  { 
  id: 34, 
  imie: 'Dorota' 
  }, 
  { 
  id: 55, 
  imie: 'Wojciech' 
  }, 
  this.mojTyp 
  ]; 
  
  constructor() { } 
  
  ngOnInit() { 
  this.initOsoby(); 
  console.log('osoba', this.osoba); 
  console.log('listaOsob1', this.listaOsob1); 
  console.log('listaOsob2', this.listaOsob2); 
  
  if (this.listaOsob1.length < 4) { 
  console.log(false); 
  } else if (this.listaOsob1.length > 4) { 
  console.log(true); 
  } else { 
  console.log('lista osób = 4'); 
  } 
  } 
  
  initOsoby() { // metoda inicjalizująca dane
  this.osoba = new Osoba(); 
  this.osoba.id = 1; 
  this.osoba.imie = 'Karol'; 
  this.listaOsob1.push(this.osoba); 
  
  const osoba2 = new Osoba(); // const: stała
  osoba2.id = 2; 
  osoba2.imie = 'Monika'; 
  this.listaOsob1.push(osoba2); 
  
  let osoba3 = new Osoba(); // let zmienna lokalna
  osoba3.id = 3; 
  osoba3.imie = 'Piotr'; 
  this.listaOsob1.push(osoba3); 
  
  osoba3 = new Osoba(); 
  osoba3.id = 4; 
  osoba3.imie = 'Teresa'; 
  this.listaOsob1.push(osoba3); 
  } 
 } 
  
 export class Osoba { 
  id: number | undefined; 
  imie?: string; // ? - określa opcjonalność zmiennej
  nazwisko?: string; 
 }*/

 // cw7 zad1

 export class AppComponent implements OnInit { 
  daneosobowe: DaneOsobowe | undefined; 
  
  mojTyp = { 
  id: 0, 
  imie: 'Roman', 
  nazwisko: 'Nowak', 
  wiek: 21
  }; 
  
  listaOsob1: DaneOsobowe[] = []; 
  listaOsob2: DaneOsobowe[] = [ 
  { 
  id: 23, 
  imie: 'Bożena',
  }, 
  { 
  id: 34, 
  imie: 'Dorota' 
  }, 
  { 
  id: 55, 
  imie: 'Wojciech' 
  }, 
  this.mojTyp 
  ]; 
  
  constructor() { } 
  ngOnInit() {
  }
 }
  export class DaneOsobowe { 
  id: number | undefined; 
  imie?: string; 
  nazwisko?: string;
  wiek?: number
  praca?: boolean 
 }

