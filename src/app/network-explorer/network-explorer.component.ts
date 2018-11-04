import { ExplorerDataTableComponent } from './explorer-data-table/explorer-data-table.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NetworkDataService } from '../_core/_services/network-data.service';



export interface Tech {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-network-explorer',
  templateUrl: './network-explorer.component.html',
  styleUrls: ['./network-explorer.component.scss']
})
export class NetworkExplorerComponent implements OnInit {

  selectedTech: string;
  expData: Promise<any>;

  techs: Tech[] = [
    { value: '', viewValue: '' },
    { value: 'lte', viewValue: '4G' },
    { value: 'umts', viewValue: '3G' },
    { value: 'gsm', viewValue: '2G' }
  ];

  hideAdvancedFilter: Boolean = true;

  constructor(private nds: NetworkDataService) { }

  ngOnInit() {
  }

  toggleAdvancedFilter() {
    this.hideAdvancedFilter = !this.hideAdvancedFilter;
  }

  loadData() {
    console.log('Getting Site Data');
    this.expData = this.nds
      .getNetworkData()
      .then(data => {
        console.log(data);
      });
  }


}
