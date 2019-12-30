import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  data = [
    {
      name: 'Label 1',
      color: 'primary',
      selected: false
    },
    {
      name: 'Label 2',
      color: 'secondary',
      selected: true
    },
    {
      name: 'Label 3',
      color: 'tertiary',
      selected: false
    },
    {
      name: 'Label 4 ',
      color: 'success',
      selected: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(check){
    console.log(check);
  }

}
