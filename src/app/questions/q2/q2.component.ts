import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../interfaces/Question';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit,Question {

  @Output() sliderValue= new  EventEmitter<number>();
  @Output() onCreated=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.onCreated.emit(this);
  }
  onValueUpdated(value:any){
    localStorage.setItem('blue',value+"");
    this.sliderValue.emit(value);
  }
  getBaseValue(){
    let item=localStorage.getItem('blue');
    if(item == null){
      localStorage.setItem('blue',"50");
      return 50;
    }
    return item as any as number;
  }

}
