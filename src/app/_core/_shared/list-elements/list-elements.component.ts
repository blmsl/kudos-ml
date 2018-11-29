import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, fromEvent, of, from } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {


  searchBox = document.getElementById('search-box');

  searchControl = new FormControl();
  elements: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
  selectedElements: string[];
  filteredOptions: Observable<string[]>;
  selectedOptions;



  constructor () {

    this.searchControl.valueChanges
      .pipe(
        debounceTime(250),
        distinctUntilChanged(),
        map(term => {
          if (term.toString().length > 0) {
            return this.elements.filter(option => option.toLowerCase().includes(term));
          } else {
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


  ngOnInit() {

    this.filteredOptions = of(this.elements);

  }



  optionClicked(event) {
    // console.log('Clicked', event);
    this.selectedElements = event;
  }

  clickOption($event) {
    console.log('Click Option', $event);
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
