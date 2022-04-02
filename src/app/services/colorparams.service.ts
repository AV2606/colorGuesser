import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorparamsService {

  PickedColor={
  red:-1,
  green:-1,
  blue:-1}

  constructor() { }

  getColor(){
    return this.PickedColor;
  }
  getColorAsRGBString(){
    return this.PickedColor.red+","+this.PickedColor.green+","+this.PickedColor.blue;
  }
  /**
   * 
   * @param brightness Sets the brightness of the pickedColor (ranged from 0 to 1 where 0=black and 1=white, if greater than one the decimal point moves until its 1 or less, if below 0 the sign changes and checks again if greater than 1.)
   */
  setColorBrightness(brightness:number): void{
    if(brightness>1){
      this.setColorBrightness(brightness/10);
      return;
    }
    if(brightness<0){
      this.setColorBrightness(brightness*-1);
      return;
    }

    let ratio=0;
    if(this.PickedColor.red>ratio)
      ratio=this.PickedColor.red;
    if(this.PickedColor.blue>ratio)
      ratio=this.PickedColor.blue;
    if(this.PickedColor.green>ratio)
      ratio=this.PickedColor.green;
    
    this.PickedColor.red*=(256/ratio)*brightness;
    this.PickedColor.blue*=(256/ratio)*brightness;
    this.PickedColor.green*=(256/ratio)*brightness;
  }
}
