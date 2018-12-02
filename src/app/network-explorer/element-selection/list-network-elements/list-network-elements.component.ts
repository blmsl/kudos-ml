import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ExplorerListService } from '../../../_core/_services/explorer-list.service';
import { Observable, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';


interface IOptionItem {
  option: String;
  selected: Boolean;
}

@Component({
  selector: 'app-list-network-elements',
  templateUrl: './list-network-elements.component.html',
  styleUrls: ['./list-network-elements.component.scss']
})
export class ListNetworkElementsComponent implements OnInit, OnChanges {

  @Input() mode: string;
  @Input() optionInput: string[];
  @Input() searchterm: string;

  selectedOptions = [];
  filteredOption$: Observable<IOptionItem[]>;
  filteredOptions: IOptionItem[];
  filterOn: Boolean = false;
  optionsList: IOptionItem[];


  constructor (private exSvc: ExplorerListService) {

    // Observe Filter Input Changes
    // this.searchControl.valueChanges
    //   .pipe(
    //     debounceTime(200),
    //     distinctUntilChanged(),
    //     map(term => {
    //       if (term.toString().length > 0) {
    //         this.filterOn = true;
    //         return this.optionsList.filter((item: IOptionItem) => item.option.toLowerCase().includes(term));
    //       } else {
    //         this.filterOn = false;
    //         return this.optionsList;
    //       }
    //     }))
    //   .subscribe(filterVals => {
    //     this.filteredOptions = filterVals;
    //     this.filteredOption$ = of(filterVals);
    //   });
  }

  ngOnInit() {
    // Create Options
    this.optionsList = this.optionInput.map(item => ({ option: item, selected: false }));
    this.filteredOption$ = of(this.optionsList);
    this.exSvc.getObserver(this.mode)
      .subscribe((list) => {
        this.selectedOptions = list.filter((item: IOptionItem) => item.selected).map(x => x.option);
      });
  }

  ngOnChanges() {
    let filter;
    if (this.searchterm.toString().length > 0) {
      this.filterOn = true;
      filter = this.optionsList.filter((item: IOptionItem) => item.option.toLowerCase().includes(this.searchterm));
    } else {
      this.filterOn = false;
      filter = this.optionsList;
    }
    this.filteredOptions = filter;
    this.filteredOption$ = of(filter);
  }

  changeAllSelections(selected: Boolean) {
    if (this.filterOn) {
      this.filteredOptions
        .filter((item: IOptionItem) => item.selected !== selected)
        .map(x => x.selected = selected);
    } else {
      this.optionsList
        .filter((item: IOptionItem) => item.selected !== selected)
        .map(x => x.selected = selected);
    }
    this.exSvc.setObserver(this.mode, this.optionsList);
  }

  onSelectedOptionsChange(element: IOptionItem) {
    element.selected = !element.selected;
    this.exSvc.setObserver(this.mode, this.optionsList);
  }



}
