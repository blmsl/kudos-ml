import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { ExplorerListService } from '../../../_core/_services/explorer-list.service';
import { Observable, Subject, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


interface IOptionItem {
  option: String;
  selected: Boolean;
}

@Component({
  selector: 'app-list-network-elements',
  templateUrl: './list-network-elements.component.html',
  styleUrls: ['./list-network-elements.component.scss']
})
export class ListNetworkElementsComponent implements OnInit, OnChanges, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  @Input() mode: string;
  @Input() optionInput: string[];
  @Input() searchterm: string;
  @Input() markAll: Boolean = true;

  selectedOptions = [];
  filteredOption$: Observable<IOptionItem[]>;
  filteredOptions: IOptionItem[];
  filterOn: Boolean = false;
  optionsList: IOptionItem[];


  constructor (private explrSvc: ExplorerListService) { }


  ngOnInit() {

    // Create Options
    this.optionsList = this.optionInput.map(option => ({ option, selected: false }));
    this.filteredOption$ = of(this.optionsList);

    // Subscribe to list items
    this.explrSvc.getObserver(this.mode)
      .pipe(takeUntil(this.destroy$))
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


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
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
    this.explrSvc.setObserver(this.mode, this.optionsList);
  }


  onSelectedOptionsChange(element: IOptionItem) {
    element.selected = !element.selected;
    this.explrSvc.setObserver(this.mode, this.optionsList);
  }



}
