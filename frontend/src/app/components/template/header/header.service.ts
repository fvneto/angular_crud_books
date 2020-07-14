import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/*
 * It will have a single instance throughout the application
 */
@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  /*
   * This will observe, control and update the data
  */
  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Home',
    icon: 'home',
    routeUrl: ''
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }
}
