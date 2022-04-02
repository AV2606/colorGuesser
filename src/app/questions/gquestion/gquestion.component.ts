import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { range } from 'rxjs';
import { Question } from '../interfaces/Question';


@Component({
  selector: 'app-gquestion',
  templateUrl: './gquestion.component.html',
  styleUrls: ['./gquestion.component.css']
})
export class GQuestionComponent implements OnInit,Question {
  slider:number=50;


  @Input() color="blue";
  @Input() thingToLikeText="the color blue";
  @Input() rangeBaseValue=50;
  @Output() sliderValue = new EventEmitter<number>();
  constructor() { 
  }
  getBaseValue(): number {
    return -2;
  }
  
  ngOnInit(): void {
    this.slider=this.rangeBaseValue;
    let ranger:any=document.getElementById("ranger");
    ranger.value=this.slider;
    this.sliderValue.emit(this.slider);
  }
  showSlider(ranger:any){
    this.slider=ranger.target.value as any as number;
    this.sliderValue.emit(this.slider);
  }
  public GetSliderValue():number{
    return this.slider;
  }

}
