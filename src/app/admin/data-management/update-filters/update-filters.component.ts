import { Component, OnInit } from '@angular/core';

interface IOptionItem {
  option: String;
  selected: Boolean;
}

@Component({
  selector: 'app-update-filters',
  templateUrl: './update-filters.component.html',
  styleUrls: ['./update-filters.component.scss']
})
export class UpdateFiltersComponent implements OnInit {

  updateStarted = false;
  hideSpinner = true;
  numSelected = 0;
  selection: IOptionItem[] = [];

  updateslist: IOptionItem[] = [
    {
      option: 'all',
      selected: false
    },
    {
      option: 'optimisers',
      selected: false
    },
    {
      option: 'carriers',
      selected: false
    },
    {
      option: 'radio managers',
      selected: false
    },
    {
      option: 'areas',
      selected: false
    },
    {
      option: 'techs',
      selected: false
    },
  ];

  constructor () { }

  ngOnInit() {
  }

  startUpdate() {
    console.log('Start Updates', this.selection);
  }

  doSelection() {
    this.selection = this.updateslist.filter(x => x.selected && x.option !== 'all');
  }

  onSelectedOptionsChange(element: IOptionItem) {
    if (element.option === 'all') {
      this.updateslist
        .filter(notall => notall.option !== 'all')
        .map(x => x.selected = !element.selected);
    }
    element.selected = !element.selected;

    this.numSelected = this.updateslist.filter(x => x.selected).length;

  }

}
