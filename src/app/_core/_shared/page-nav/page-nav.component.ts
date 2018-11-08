import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent implements OnInit {

  @Input() pageLinks;

  constructor() { }

  ngOnInit() {
  }

}
