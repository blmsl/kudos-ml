import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

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

  quickOptionsControl = new FormControl();
  quickSubOptions: BehaviorSubject<string[]>;
  searchControl = new FormControl();
  searchterm = '';
  filterOn: Boolean = false;

  elements: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

  quickOptions: Tech[] = [
    { value: 'tech', viewValue: 'Technology' },
    { value: 'carrier', viewValue: 'Carrier' },
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

  constructor () {

    this.quickOptionsControl.valueChanges
      .subscribe(quickOpt => console.log(quickOpt));

    this.searchControl.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(term => {
        term.length > 0 ? this.filterOn = true : this.filterOn = false;
        this.searchterm = term;
      });

  }

  ngOnInit() {

  }

  emptySearch() {
    this.searchControl.setValue('');
  }

}
