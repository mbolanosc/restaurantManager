import { Component, OnInit, Input } from '@angular/core';
import { Model } from '../models/model';

@Component({
  selector: 'app-new-dish-form',
  templateUrl: './new-dish-form.component.html',
  styleUrls: ['./new-dish-form.component.css']
})

export class NewDishFormComponent implements OnInit {
  name = "";
  price = "";
  desccription = "";
  categotyName = "";

  constructor() { }

  ngOnInit() {
  }
  addFood(name,price,desccription,category){
    console.log(name,price,desccription,category);
  }

}
