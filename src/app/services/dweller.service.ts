import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Dweller } from '../models/DwellerModel';
import { delay, map, take, tap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DwellerService {
  private readonly API = environment.API + 'v1/Dweller/';
  private url = 'http://jsonplaceholder.typicode.com/posts';

  private dwellersBase: Dweller[] = [
      {guid: "xxxxxxxx", name: "Guilherme Gatto",  buildName: "Esmeralda", aptNumber: 1910},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
      {guid: "xxxxxxxx", name: "blabla",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
      {guid: "xxxxxxxx", name: "blabla",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
      {guid: "xxxxxxxx", name: "blabla",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
      {guid: "xxxxxxxx", name: "blabla",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "JOrge",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
      {guid: "xxxxxxxx", name: "blabla",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
      {guid: "xxxxxxxx", name: "blabla",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
      {guid: "xxxxxxxx", name: "blabla",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
      {guid: "xxxxxxxx", name: "blabla",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
      {guid: "xxxxxxxx", name: "blabla",  buildName: "Esmeralda", aptNumber: 1907},
      {guid: "xxxxxxxx", name: "blablu",  buildName: "Jade", aptNumber: 1908},
      {guid: "xxxxxxxx", name: "blable",  buildName: "Rubi", aptNumber: 1909},
    ];

    private _dwellersObservable: BehaviorSubject<Dweller[]> = new BehaviorSubject<Dweller[]>([]);

  constructor(private http: HttpClient) {}

  get dwellersObservable(): Observable<Dweller[]> {
    return this._dwellersObservable.asObservable();
  }

  getById() {
    const requestOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        // 'Access-Control-Allow-Headers': 'Content-Type',
        'id': '9B9605C7-C26B-4187-8884-B4ADBDFCF19A',
      })
    };

    return this.http.get<Dweller>(this.API + "getById", requestOptions)
    .pipe(take(1));;
  }

  getAll() {
    return this.dwellersObservable;
  }

  SetObservableList(filterString: string) {
    if (!filterString)
      this._dwellersObservable.next(this.dwellersBase);
    else
    {
      let dwellerFiltered: Dweller[] = [];
      this.dwellersBase
      .forEach(dweller => {
        if (dweller.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1) {
          dwellerFiltered.push(dweller);
        }
      });

      this._dwellersObservable.next(dwellerFiltered);
    }
  }
}
