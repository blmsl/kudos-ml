import { Component, OnInit } from '@angular/core';
import { LinkModel } from '../_core/_models/models-kudos';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  testingLinks: LinkModel[] = [
    {
      route: 'csv2json',
      label: 'CSV to JSON',
      icon: ''
    },
    {
      route: 'flat2json',
      label: 'Flat to JSON',
      icon: ''
    },
    {
      route: 'data-structure',
      label: 'Data Structure',
      icon: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
