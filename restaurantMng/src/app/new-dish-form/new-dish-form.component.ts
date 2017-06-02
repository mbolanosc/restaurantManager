import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from models
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

}
