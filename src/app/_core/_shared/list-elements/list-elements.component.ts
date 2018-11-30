import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject, fromEvent, of, from } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



interface IOptionItem {
  option: String;
  selected: Boolean;
}


@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit {

  searchControl = new FormControl();
  selectedOptions = [];
  filteredOptions: Observable<IOptionItem[]>;
  filterOn: Boolean = false;
  listObserver: BehaviorSubject<IOptionItem[]> = new BehaviorSubject([]);
  optionsList: IOptionItem[];
  optionInput: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];


  constructor () {

    // Create Options
    this.optionsList = this.optionInput.map(item => ({ option: item, selected: false }));

    // Observe Filter Input Changes
    this.searchControl.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(term => {
          if (term.toString().length > 0) {
            this.filterOn = true;
            return this.optionsList.filter((item: IOptionItem) => item.option.toLowerCase().includes(term));
          } else {
            this.filterOn = false;
            return this.optionsList;
          }
        }))
      .subscribe(filterVals => {
        this.filteredOptions = of(filterVals);
      });
  }

  ngOnInit() {
    this.filteredOptions = of(this.optionsList);
    this.listObserver.subscribe((list) => this.selectedOptions = list.filter((item: IOptionItem) => item.selected).map(x => x.option));
  }

  changeAllSelections(selected: Boolean) {
    this.optionsList
      .filter((item: IOptionItem) => item.selected !== selected)
      .map(x => x.selected = selected);
    this.listObserver.next(this.optionsList);
  }

  onSelectedOptionsChange(element: IOptionItem) {
    element.selected = !element.selected;
    this.listObserver.next(this.optionsList);
  }


  emptySearch() {
    this.searchControl.setValue('');
  }

}

