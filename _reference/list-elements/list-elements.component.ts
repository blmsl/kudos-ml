import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExplorerListService } from '../../_services/explorer-list.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';



interface IOptionItem {
  option: String;
  selected: Boolean;
}


@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.scss']
})
export class ListElementsComponent implements OnInit, OnChanges {

  @Input() mode: string;



  searchControl = new FormControl();
  selectedOptions = [];
  filteredOptions: Observable<IOptionItem[]>;
  filterOn: Boolean = false;

  // Move to Service
  // listObserver: BehaviorSubject<IOptionItem[]> = new BehaviorSubject([]);
  optionsList: IOptionItem[];
  optionInput: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];


  constructor (private exSvc: ExplorerListService) {

    console.log('CONSTR MODE', this.mode);

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

  ngOnChanges() {
    if (this.mode) {
      console.log('OnChanges', this.mode);
    }
  }

  ngOnInit() {
    console.log('INIT MODE', this.mode);
    this.filteredOptions = of(this.optionsList);
    // this.listObserver.subscribe((list) => this.selectedOptions = list.filter((item: IOptionItem) => item.selected).map(x => x.option));
    // this.exSvc.getObserver(this._mode).subscribe((list) => this.selectedOptions = list.filter((item: IOptionItem) => item.selected).map(x => x.option));
  }

  changeAllSelections(selected: Boolean) {
    this.optionsList
      .filter((item: IOptionItem) => item.selected !== selected)
      .map(x => x.selected = selected);
    // this.listObserver.next(this.optionsList);
    this.exSvc.setObserver(this.mode, this.optionsList);
  }

  onSelectedOptionsChange(element: IOptionItem) {
    console.log('CHNAGEOPT MODE', this.mode);
    element.selected = !element.selected;
    // this.listObserver.next(this.optionsList);
    this.exSvc.setObserver(this.mode, this.optionsList);
  }

  emptySearch() {
    this.searchControl.setValue('');
  }

}

