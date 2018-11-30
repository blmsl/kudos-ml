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

  searchControl = new FormControl();
  selectedElements: IOptionList[] = [];
  filteredOptions: Observable<IOptionList[]>;
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


  constructor () {

    this.searchControl.valueChanges
      .pipe(
        debounceTime(250),
        distinctUntilChanged(),
        map(term => {
          if (term.toString().length > 0) {
            return this.elements.filter((item: IOptionList) => item.option.toLowerCase().includes(term));
          } else {
            return this.elements;
          }
        })
      )
      .subscribe(filterVals => {
        this.filteredOptions = of(filterVals);
      });

  }

  // https://material.angular.io/components/autocomplete/overview
  // https://stackoverflow.com/questions/50744023/mat-selection-list-with-search-filter-not-keeping-selections-after-a-search

  ngOnInit() {
    this.filteredOptions = of(this.elements);
  }

  onSelectedOptionsChange(element: IOptionList) {
    element.selected = !element.selected;
    this.selectedElements = this.elements.filter((item: IOptionList) => item.selected);
  }

  clearSelected() {
    this.selectedElements = [];
    this.elements.forEach(item => item.selected = false);
  }

  emptySearch() {
    this.searchControl.setValue('');
  }

}

