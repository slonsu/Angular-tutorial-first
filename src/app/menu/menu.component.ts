import { Component, OnInit } from '@angular/core';
import {state, style, trigger, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: 0
      })),
      state('close', style({
        left: '-300px'
      })),
      transition('open <=> close', [
        animate('0.5s')
      ])
    ])
  ]
})

export class MenuComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.isOpen = true;
  }

  hideMenu() {
    this.isOpen = false;
  }
}
