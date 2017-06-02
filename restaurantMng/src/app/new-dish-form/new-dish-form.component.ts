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
  categotyName = "";

  constructor() { }
  @Input() food;


  ngOnInit() {
  }
  addFood(inputName, inputPrice, textareaDescrip, category) {
    console.log(inputName, inputPrice, textareaDescrip, category);
  }

}
