import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../models/model';

@Component({
  selector: 'app-new-dish-form',
  templateUrl: './new-dish-form.component.html',
  styleUrls: ['./new-dish-form.component.css']
})

export class NewDishFormComponent implements OnInit {
  inputName = "";
  inputPrice = "";
  textareaDescrip = "";
  categoryinput = "";

  constructor() { }
  @Input() food;


  ngOnInit() {
  }
  addFood(inputName, inputPrice, textareaDescrip, categoryinput) {
    console.log(inputName, inputPrice, textareaDescrip, categoryinput);
  }

}
