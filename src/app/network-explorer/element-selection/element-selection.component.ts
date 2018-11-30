import { Component, OnInit } from '@angular/core';

export interface Tech {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-element-selection',
  templateUrl: './element-selection.component.html',
  styleUrls: ['./element-selection.component.scss']
})
export class ElementSelectionComponent implements OnInit {

  quickOptions: Tech[] = [
    { value: 'tech', viewValue: 'Technology' },
    { value: 'optimiser', viewValue: 'Optimiser' },
    { value: 'site', viewValue: 'Site' },
    { value: 'area', viewValue: 'Area' }
  ];

  techs: Tech[] = [
    { value: null, viewValue: 'All' },
    { value: 'lte', viewValue: '4G' },
    { value: 'umts', viewValue: '3G' },
    { value: 'gsm', viewValue: '2G' }
  ];

  selectedQuick: string;
  selectedTech: string;

  constructor () { }

  ngOnInit() {
  }

}
