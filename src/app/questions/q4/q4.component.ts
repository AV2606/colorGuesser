import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Question } from '../interfaces/Question';

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component implements OnInit,Question {

  @Output() sliderValue=new EventEmitter<number>();
  @Output() onCreated=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    this.onCreated.emit(this);
  }
  onValueUpdated(value:any){
    localStorage.setItem('bright',value+"");
    this.sliderValue.emit(value);
  }
  getBaseValue(){
    let item=localStorage.getItem('bright');
    if(item == null){
      localStorage.setItem('bright',"100");
      return 100;
    }
    return item as any as number;
  }



}
