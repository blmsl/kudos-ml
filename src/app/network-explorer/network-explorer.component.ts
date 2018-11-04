import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network-explorer',
  templateUrl: './network-explorer.component.html',
  styleUrls: ['./network-explorer.component.scss']
})
export class NetworkExplorerComponent implements OnInit {

  filterValue: String = '';

  hideAdvancedFilter: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleAdvancedFilter() {
    this.hideAdvancedFilter = !this.hideAdvancedFilter;
  }

}
