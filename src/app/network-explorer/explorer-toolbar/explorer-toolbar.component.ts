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

  techs: Tech[] = [
    { value: null, viewValue: 'All' },
    { value: 'lte', viewValue: '4G' },
    { value: 'umts', viewValue: '3G' },
    { value: 'gsm', viewValue: '2G' }
  ];

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
