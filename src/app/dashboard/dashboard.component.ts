import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
} )
export class DashboardComponent implements OnInit {

  algos: { name: string, question: string }[];

  constructor() {
    this.algos = [
      { name: 'Classification', question: 'Is this A or B? [Limited number of answers]' },
      { name: 'Anomoly', question: 'Is this wierd? [Change in Pattern]' },
      { name: 'Regression', question: 'How much or how many? [Quantify]' },
      { name: 'Clustering', question: 'How is this organised? [Grouping / Sorting] - E.g. Use for Traffic Site Density' },
      { name: 'Reinforcement Learning', question: 'What should I do next? [Make decision,  based on past experiences]' }
    ];
  }



  ngOnInit() {
  }

}
