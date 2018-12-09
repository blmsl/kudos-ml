import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() sidenavToggle = new EventEmitter<void>();

  destroy$: Subject<boolean> = new Subject<boolean>();

  // authState: Boolean;

  constructor (public auth: AuthService) {

    // this.auth.isAuth$()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(state => {
    //     this.authState = state;
    //   });

  }

  ngOnInit() { }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }


  onToggleSideNav() {
    this.sidenavToggle.emit();
  }


  doSignout() {
    this.auth.logout();
  }

}
