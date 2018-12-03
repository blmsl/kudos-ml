import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirebaseRtdbService } from '../../_core/_services/firebase-rtdb.service';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


export interface SelectOption {
  id: string;
  label: string;
  options?: string[];
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
  filterOn: Boolean = false;
  selectedQuickFilterOption: string;
  selectedQuickFilterSelection: string;
  searchterm = '';

  markAll = {
    sites: false,
    sectors: false,
    antennas: false,
    cells: true
  };

  elements: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

  quickFilters = [];
  quickOptions: SelectOption[] = [];
  quickSelection: SelectOption[] = [];


  constructor (private rtdb: FirebaseRtdbService) {
    // Subscribe to Quick Filters
    this.rtdb.getList('quick-filters')
      .subscribe(filters => {
        this.quickFilters = filters;
      });
  }


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
        const options = this.quickFilters
          .filter(f => f.id === quickOption)
          .map(filter => filter.options)
          .map(o => o);
        console.log('Quick Filter Selection', options);
        this.quickSubOption$.next(options[0]);
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
