import { Component, OnInit } from '@angular/core';

export interface Tech {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-explorer-toolbar',
  templateUrl: './explorer-toolbar.component.html',
  styleUrls: ['./explorer-toolbar.component.scss']
})
export class ExplorerToolbarComponent implements OnInit {


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
  hideAdvancedFilter: Boolean = true;

  constructor () {

    // this.selectedTech = this.techs[0].value;
    this.selectedTech = null;

  }

  ngOnInit() {
  }

  toggleAdvancedFilter() {
    this.hideAdvancedFilter = !this.hideAdvancedFilter;
  }

}
