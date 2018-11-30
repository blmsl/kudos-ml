import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, fromEvent, of, from } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



interface IOptionList {
  option: string;
  selected: boolean;
}


@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {


  searchBox = document.getElementById('search-box');

  searchControl = new FormControl();
  // elements: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  elements: IOptionList[] = [
    { option: 'One', selected: false },
    { option: 'Two', selected: false },
    { option: 'Three', selected: false },
    { option: 'Four', selected: false },
    { option: 'Five', selected: false },
    { option: 'Six', selected: false },
    { option: 'Seven', selected: false },
    { option: 'Eight', selected: false },
    { option: 'Nine', selected: false },
    { option: 'Ten', selected: false },
  ];
  selectedElement$: Observable<IOptionList[]>;
  selectedElements: IOptionList[];
  filteredOptions: Observable<IOptionList[]>;
  filterOn = false;
  selectedOptions;



  constructor () {

    this.searchControl.valueChanges
      .pipe(
        debounceTime(250),
        distinctUntilChanged(),
        map(term => {
          if (term.toString().length > 0) {
            this.filterOn = true;
            return this.elements.filter((item: IOptionList) => item.option.toLowerCase().includes(term));
          } else {
            this.filterOn = false;
            return this.elements;
          }
        })
      )
      .subscribe(filterVals => {
        console.log('Typed', filterVals);
        console.log('Search Term', this.searchControl.value);
        this.filteredOptions = of(filterVals);
      });

  }

  // https://stackoverflow.com/questions/50744023/mat-selection-list-with-search-filter-not-keeping-selections-after-a-search

  ngOnInit() {

    this.filteredOptions = of(this.elements);
    this.selectedElement$ = of(this.elements.filter((item: IOptionList) => item.selected));

  }

  onSelectedOptionsChange(event) {
    this.selectedElements = this.elements.filter((item: IOptionList) => item.selected);
    console.log('Click Change Option', event, this.selectedElements);
  }

  optionClicked(event) {
    console.log('Click List', event, this.filterOn);
    this.selectedElements = event;
  }

  clickOption(optEvent) {
    console.log('Click Option', optEvent, this.filterOn);
  }

  clearSelected() {
    console.log('Clear', this.selectedOptions);
    this.selectedOptions = [];
    console.log('Clear', this.selectedOptions);
  }


  emptySearch() {
    this.searchControl.setValue('');
  }

}

// https://material.angular.io/components/autocomplete/overview
