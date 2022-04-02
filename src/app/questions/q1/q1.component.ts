import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Question } from '../interfaces/Question';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit,Question {

  @Output() sliderValue= new EventEmitter<number>();
  @Output() onCreated=new EventEmitter<any>();
  constructor(){
  }
  ngOnInit(): void {
      this.onCreated.emit(this);
  }
  onValueUpdated(value:any){
    localStorage.setItem('red',value+"");
    this.sliderValue.emit(value);
  }
  getBaseValue(){
    let item=localStorage.getItem('red');
    if(item == null){
      localStorage.setItem('red',"50");
      return 50;
    }
    return item as any as number;
  }

}
