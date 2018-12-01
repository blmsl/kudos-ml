import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';


interface IOptionItem {
  option: String;
  selected: Boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ExplorerListService {

  private _observerSites: BehaviorSubject<IOptionItem[]>;
  private _observerSectors: BehaviorSubject<IOptionItem[]>;
  private _observerAntennas: BehaviorSubject<IOptionItem[]>;
  private _observerCells: BehaviorSubject<IOptionItem[]>;

  constructor () {
     this._observerSites = new BehaviorSubject<IOptionItem[]>([]);
     this._observerSectors = new BehaviorSubject<IOptionItem[]>([]);
     this._observerAntennas = new BehaviorSubject<IOptionItem[]>([]);
     this._observerCells = new BehaviorSubject<IOptionItem[]>([]);
    }

  public getObserver(mode: string): Observable<IOptionItem[]> {
    const getObs = this.getModelSubject(mode);
    return getObs.asObservable();
  }

  public setObserver(mode: string, obsList: IOptionItem[]) {
    const setObs = this.getModelSubject(mode);
    setObs.next(obsList);
  }

  public getSelected(mode: string): Observable<any[]> {
    const getObs = this.getModelSubject(mode);
    const selected = getObs.getValue().filter(item => item.selected).map(x => x.option);
    return of(selected);
  }


  private getModelSubject(mode: string): BehaviorSubject<IOptionItem[]> {

    let subject: BehaviorSubject<IOptionItem[]>;

    switch (mode) {
      case 'sites':
        subject = this._observerSites;
        break;
      case 'sectors':
        subject = this._observerSectors;
        break;
      case 'antennas':
        subject = this._observerAntennas;
        break;
      case 'cells':
        subject = this._observerCells;
        break;
    }
    return subject;
  }

}
