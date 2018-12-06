import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirebaseRtdbService } from '../../_core/_services/firebase-rtdb.service';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';


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
export class ElementSelectionComponent implements OnInit, OnDestroy {


  @Input() modes: string[];

  destroy$: Subject<boolean> = new Subject<boolean>();

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
      .pipe(takeUntil(this.destroy$))
      .subscribe(filters => {
        this.quickFilters = filters;
      });
  }


  ngOnInit() {

    // Quick Filter Selection
    this.quickFilterSelectionControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(quickSelection => {
        this.selectedQuickFilterSelection = quickSelection;
        console.log('Quick Filter Selection', this.selectedQuickFilterOption, quickSelection);
      });

    // Quick Filter Options
    this.quickFilterOptionsControl.valueChanges
      .pipe(takeUntil(this.destroy$))
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
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(200),
        distinctUntilChanged())
      .subscribe(term => {
        term.length > 0 ? this.filterOn = true : this.filterOn = false;
        this.searchterm = term;
      });

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  emptySearch() {
    this.searchControl.setValue('');
  }

}
