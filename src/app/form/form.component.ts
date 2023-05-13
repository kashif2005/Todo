import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // data:any=[];
  data:any=[];
getData(text:any){
  this.data.push(text)
}
}
