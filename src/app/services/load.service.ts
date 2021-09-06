import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Loader } from '../Enums/Enum';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  private _loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  get LoaderStatus(): Observable<boolean> {
    return this._loaderStatus.asObservable();
  }

  setLoaderStatus(value: Loader) {
    switch(value) {
      case Loader.SHOW: {
        this._loaderStatus.next(true);
        break;
      }
      case Loader.HIDE: {
        this._loaderStatus.next(false);
      }
    }
  }
}
