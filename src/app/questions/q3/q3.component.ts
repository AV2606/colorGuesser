import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../interfaces/Question';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['./q3.component.css']
})
export class Q3Component implements OnInit,Question {

  @Output() sliderValue= new EventEmitter<number>();
  @Output() onCreated=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.onCreated.emit(this);
  }
  onValueUpdated(value:any){
    localStorage.setItem('green',value+"");
    this.sliderValue.emit(value);
  }
  getBaseValue(){
    let item=localStorage.getItem('green');
    if(item == null){
      localStorage.setItem('green',"50");
      return 50;
    }
    return item as any as number;
  }


}
