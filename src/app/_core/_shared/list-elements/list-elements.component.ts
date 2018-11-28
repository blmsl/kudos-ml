import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {

  searchControl = new FormControl();
  elements: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  title = 'Network Element';


  constructor () { }


  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.elements.filter(option => option.toLowerCase().includes(filterValue));
  }

}

// https://material.angular.io/components/autocomplete/overview
