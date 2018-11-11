import { Component, OnInit } from '@angular/core';


export interface Tech {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-advanced-filter',
  templateUrl: './advanced-filter.component.html',
  styleUrls: ['./advanced-filter.component.scss']
})
export class AdvancedFilterComponent implements OnInit {


  constructor () { }

  ngOnInit() {
  }

}
