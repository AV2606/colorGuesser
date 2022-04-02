import { Component, OnInit } from '@angular/core';
import { Question } from '../questions/interfaces/Question';
import { ColorparamsService } from '../services/colorparams.service';

enum Questions{
  q1='q1',
  q2='q2',
  q3='q3',
  q4='q4'
};


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  Questions=Questions;

  currentQuestion=Questions.q1;
  color:ColorparamsService["PickedColor"];
  nextButtonText="next";
  showQuestions=false;
  showAnswer=false;
  brightness:number=1;
  circleText="";


  constructor(public pickedColorService:ColorparamsService) {
    this.color=this.pickedColorService.PickedColor;
   }

  ngOnInit(): void {
  }
  assignQRed(question:Question){
    question.sliderValue.subscribe((value)=>{
      this.color.red=value;
    });
  }
  assignQBlue(question:Question){
    question.sliderValue.subscribe((value)=>{
      this.color.blue=value;
    });
  }
  assignQGreen(question:Question){
    question.sliderValue.subscribe((value)=>{
      this.color.green=value;
    });
  }
  assignQBrightness(question:Question){
    question.sliderValue.subscribe((value)=>{
      //this.pickedColorService.setColorBrightness(value);
      this.brightness=value/100;
    });
  }
  nextQuestion(){
    if(this.currentQuestion==Questions.q1){
      this.currentQuestion=Questions.q2;
      return;}
      if(this.currentQuestion==Questions.q2){
        this.currentQuestion=Questions.q3;
        return;}
        if(this.currentQuestion==Questions.q3){
          this.currentQuestion=Questions.q4;
          this.nextButtonText="calculate";
          return;}
          if(this.currentQuestion==Questions.q4){
            if(this.color.red==-1||this.color.blue==-1||this.color.green==-1)
              this.currentQuestion=Questions.q1;
              else
                this.ShowResult();
              }
  }
  ShowResult(){
    this.pickedColorService.setColorBrightness(this.brightness);
    this.showQuestions=false;
    this.showAnswer=true;
    this.circleText=this.RgbToHex(this.color);
  }
  RgbToHex(color:ColorparamsService["PickedColor"]):string{
    return this.rgbToHex(color.red,color.blue,color.green);
  }
   rgbToHex(r:number, g:number, b:number):string {
    return '#'+this.numberToHex(r)+this.numberToHex(g)+this.numberToHex(b);
   }
   numberToHex(number:number){
    if(number>255)
    number=255;
   if(number<0)
    number=0;
  let n1:any=Math.floor(number/16);
  let n2:any=Math.floor( number%16);
  n1=n1==15?'f':n1==14?'e':n1==13?'d':n1==12?'c':n1==11?'b':n1==10?'a':n1;
  n2=n2==15?'f':n2==14?'e':n2==13?'d':n2==12?'c':n2==11?'b':n2==10?'a':n2;
  return ""+n1+n2;
}
getAnswerCardBackColor(){
  if(this.brightness>0.8){
    return "black";
  }
    return "white";
}
getAnswerCardForeColor(){
  if(this.brightness>0.8){
    return "white";
  }
    return "black";
}
}
