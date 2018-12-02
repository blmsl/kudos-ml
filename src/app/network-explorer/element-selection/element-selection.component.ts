import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


export interface SelectOption {
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

  quickFilterOptionsControl = new FormControl();
  quickFilterSelectionControl = new FormControl();
  quickSubOption$: BehaviorSubject<SelectOption[]> = new BehaviorSubject([]);
  searchControl = new FormControl();
  searchterm = '';
  filterOn: Boolean = false;
  selectedQuickFilterOption: string;
  selectedQuickFilterSelection: string;

  elements: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

  quickOptions: SelectOption[] = [
    { value: 'tech', viewValue: 'Technology' },
    { value: 'carrier', viewValue: 'Carrier' },
    { value: 'optimiser', viewValue: 'Optimiser' },
    // { value: 'radiomanager', viewValue: 'Radio Manager' },
    { value: 'area', viewValue: 'Area' }
  ];

  areas: SelectOption[] = [
    { value: 'london', viewValue: 'London' },
    { value: 'north', viewValue: 'North' },
    { value: 'south', viewValue: 'South' },
  ];

  optimisers: SelectOption[] = [
    { value: 'name1', viewValue: 'Name 1' },
    { value: 'name2', viewValue: 'Name 2' },
    { value: 'name3', viewValue: 'Name 3' },
    { value: 'name4', viewValue: 'Name 4' },
    { value: 'name5', viewValue: 'Name 5' },
  ];

  carriers: SelectOption[] = [
    { value: 'GSM900', viewValue: 'GSM900' },
    { value: 'UMTS2100F1', viewValue: 'UMTS 2100 F1' },
    { value: 'UMTS2100F2', viewValue: 'UMTS 2100 F1' },
    { value: 'UMTS900F3', viewValue: 'UMTS 900 F3' },
    { value: 'UMTS900F4', viewValue: 'UMTS 900 F4' },
    { value: 'LTE800', viewValue: 'LTE 800' },
    { value: 'LTE1800', viewValue: 'LTE 1800' },
    { value: 'LTE2100', viewValue: 'LTE 2100' },
    { value: 'LTE2300F1', viewValue: 'LTE 2300 F1' },
    { value: 'LTE2300F2', viewValue: 'LTE 2300 F2' },
  ];

  techs: SelectOption[] = [
    { value: null, viewValue: 'All' },
    { value: 'lte', viewValue: '4G' },
    { value: 'umts', viewValue: '3G' },
    { value: 'gsm', viewValue: '2G' }
  ];


  constructor () { }


  ngOnInit() {

    // Quick Filter Selection
    this.quickFilterSelectionControl.valueChanges
      .subscribe(quickSelection => {
        this.selectedQuickFilterSelection = quickSelection;
        console.log('Quick Filter Selection', this.selectedQuickFilterOption, quickSelection);
      });

    // Quick Filter Options
    this.quickFilterOptionsControl.valueChanges
      .subscribe(quickOption => {
        this.selectedQuickFilterOption = quickOption;
        console.log('Quick Filter Option', quickOption);
        switch (quickOption) {
          case 'tech':
            this.quickSubOption$.next(this.techs);
            break;
          case 'carrier':
            this.quickSubOption$.next(this.carriers);
            break;
          case 'optimiser':
            this.quickSubOption$.next(this.optimisers);
            break;
          case 'site':
            break;
          case 'area':
            this.quickSubOption$.next(this.areas);
            break;
        }
      });

    // Search
    this.searchControl.valueChanges
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(term => {
        term.length > 0 ? this.filterOn = true : this.filterOn = false;
        this.searchterm = term;
      });

  }

  emptySearch() {
    this.searchControl.setValue('');
  }

}
