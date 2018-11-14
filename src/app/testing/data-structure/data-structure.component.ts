import { Component, OnInit } from '@angular/core';
import { MockData } from '../../_core/_mock/_mock_site_data';

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.scss']
})
export class DataStructureComponent implements OnInit {

  input;
  output;

  constructor () {
    this.input = MockData.ex3;
   }

  ngOnInit() {
  }

  run() {

  }

}
