import { Component, OnInit } from '@angular/core';
import { Dweller } from '../../models/DwellerModel';
import { DwellerService } from '../../services/dweller.service';

@Component({
  selector: 'app-dweller-list',
  templateUrl: './dweller-list.component.html',
  styleUrls: ['./dweller-list.component.css'],
})
export class DwellerListComponent implements OnInit {
  public dwellers: Array<Dweller> = [];

  constructor(private dwellerService: DwellerService) {
  }

  ngOnInit(): void {
    this.dwellerService.dwellersObservable.subscribe(res => this.dwellers = res);
    this.dwellerService.SetObservableList("");

    // this.dwellerService.getById().subscribe(
    //   (success) => {
    //     let res = success;
    //     console.log(res);
    //   },
    //   (error) => console.log(error)
    // );
  }

  onKeyPress(event: any) {
    console.log(event.target.value);
    this.dwellerService.SetObservableList(event.target.value);
  }
}
