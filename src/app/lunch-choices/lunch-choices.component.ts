import { Component, OnInit } from '@angular/core';
import { LunchChoiceComponent } from './lunch-choice/lunch-choice.component';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'lunch-choices',
  templateUrl: 'lunch-choices.component.html',
  styleUrls: ['lunch-choices.component.css'],
  directives: [LunchChoiceComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class LunchChoicesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}