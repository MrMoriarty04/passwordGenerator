import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  length=0;
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  isAccepted= false;
  password=""; 


  onChangeLength(event: Event){
  const input = event.target as HTMLInputElement;
  const value = parseInt(input.value);

  if(!isNaN(value)){
    this.length=value;
  }

  }

  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  onButtonClick(){
    
    const numbers="1234567890";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";
    const symbols="!@#$%^&*()_+";

    let validChars="";
    if(this.includeLetters){
      validChars+=letters;
    }
    if(this.includeNumbers){
      validChars+=numbers;
    }
    if(this.includeSymbols){
      validChars+=symbols;
    }

    let generatedPassword="";

    for(let i=0;i<this.length;i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatedPassword+=validChars[index];
    }

    this.password=generatedPassword;
  }



}
