import { Component, OnInit, Input } from '@angular/core';
// import { ListElementsComponent } from '../../_core/_shared/list-elements/list-elements.component';

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


  @Input() modes: string[];

  elements: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

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
    // this.listElementsComponent.listMode = 'sites';
  }

}
