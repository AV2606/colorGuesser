import { EventEmitter, Output } from "@angular/core";

export interface Question{
     sliderValue:EventEmitter<number>;
     getBaseValue():number;
}