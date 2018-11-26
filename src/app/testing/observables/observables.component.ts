import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, BehaviorSubject, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {

  observable;
  bSubject$: BehaviorSubject<any>;
  value;
  counter: number;
  forLoop;
  forLoop$: BehaviorSubject<any>;

  source = interval(100).pipe(take(60));

  constructor (private cd: ChangeDetectorRef) { }

  ngOnInit() {

    this.bSubject$ = new BehaviorSubject(null);
    this.forLoop$ = new BehaviorSubject(null);

    this.bSubject$.subscribe(num => {
      console.log('Interval Pulse');
      this.value = num;
      // this.cd.markForCheck();
      // this.cd.detectChanges();
    });

    this.forLoop$.subscribe(num => {
      console.log('For Loop $');
      this.forLoop = num;
    });


  }

  start() {
    console.log('Start');

    this.value = null;


    // this.source.subscribe(num => {
    //   console.log('Behavior Subject Next', num);
    //   this.bSubject$.next(num);
    //   // this.cd.markForCheck();
    //   // this.cd.detectChanges();
    // });


    let ii;
    for (ii = 0; ii < 5000; ii++) {
      this.forLoop$.next(ii);
      // this.cd.markForCheck();
      // this.cd.detectChanges();
      console.log('Inside For Loop', ii);
    }

    console.log('Finish');

  }

  increment(val) {

    setTimeout(() => {
      this.forLoop$.next(val);
    }, 500);

    // this.cd.markForCheck(); // NOPE
    // this.cd.detectChanges(); // NOPE
  }

  reset() {
    this.value = 0;
    this.bSubject$.next(0);
    this.forLoop$.next(0);
  }

  // https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html

  // https://angular.io/api/core/NgZone

  // https://coryrylan.com/blog/angular-async-data-binding-with-ng-if-and-ng-else

}



// import {Component, NgZone} from '@angular/core';
// import {NgIf} from '@angular/common';

// @Component({
//   selector: 'ng-zone-demo',
//   template: `
//     <h2>Demo: NgZone</h2>

//     <p>Progress: {{progress}}%</p>
//     <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>

//     <button (click)="processWithinAngularZone()">Process within Angular zone</button>
//     <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
//   `,
// })
// export class ObservablesComponent  {
//   progress = 0;
//   label: string;

//   constructor(private _ngZone: NgZone) {}

//   // Loop inside the Angular zone
//   // so the UI DOES refresh after each setTimeout cycle
//   processWithinAngularZone() {
//     this.label = 'inside';
//     this.progress = 0;
//     this._increaseProgress(() => console.log('Inside Done!'));
//   }

//   // Loop outside of the Angular zone
//   // so the UI DOES NOT refresh after each setTimeout cycle
//   processOutsideOfAngularZone() {
//     this.label = 'outside';
//     this.progress = 0;
//     this._ngZone.runOutsideAngular(() => {
//       this._increaseProgress(() => {
//         // reenter the Angular zone and display done
//         this._ngZone.run(() => { console.log('Outside Done!'); });
//       });
//     });
//   }

//   _increaseProgress(doneCallback: () => void) {
//     this.progress += 1;
//     console.log(`Current progress: ${this.progress}%`);

//     if (this.progress < 100) {
//       window.setTimeout(() => this._increaseProgress(doneCallback), 10);
//     } else {
//       doneCallback();
//     }
//   }
// }
