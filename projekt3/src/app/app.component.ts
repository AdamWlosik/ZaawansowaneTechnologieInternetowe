import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  inputText = 'Moj input';
  zmienKolor = 'color-black';
  isDisabled = true;

  zmienUstawienia() { 
  this.isDisabled = false;
  } 
  zmiennBackground() {
    
  
  }

  onFocus() { 
  this.zmienKolor = 'color-brown';
  } 
  onClick(event) { 
  console.log(event); 
  } 
  onMouseMove(event) { 
  console.log('punktX: ' + event.clientX + ' punktY: ' + event.clientY);
  }
  onPaste() { 
  this.inputText = 'Wklejanie zabronione!';
  } 


  imie = '';

} 