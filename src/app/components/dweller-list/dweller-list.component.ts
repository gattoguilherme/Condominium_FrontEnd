import { Component, OnInit } from '@angular/core';
import { Dweller } from '../../models/DwellerModel';
import { DwellerService } from '../../services/dweller.service';
import { LoadService } from '../../services/load.service';

@Component({
  selector: 'app-dweller-list',
  templateUrl: './dweller-list.component.html',
  styleUrls: ['./dweller-list.component.css'],
})
export class DwellerListComponent implements OnInit {
  public dwellers: Array<Dweller> = [];
  public loaderStatus: boolean = false;

  constructor(private dwellerService: DwellerService, private loaderService: LoadService) {
    this.dwellerService.dwellersObservable.subscribe(res => this.dwellers = res);
    this.dwellerService.SetObservableList("");

    this.loaderService.LoaderStatus.subscribe(res => this.loaderStatus = res);
  }

  ngOnInit(): void {
    // this.dwellerService.getById().subscribe(
    //   (success) => {
    //     let res = success;
    //     console.log(res);
    //   },
    //   (error) => console.log(error)
    // );
  }

  onKeyPress(event: any) {
    this.dwellerService.SetObservableList(event.target.value);
  }
}
