import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Dweller } from '../../models/DwellerModel';

@Component({
  selector: 'app-dweller-detail-modal',
  templateUrl: './dweller-detail-modal.component.html',
  styleUrls: ['./dweller-detail-modal.component.css']
})
export class DwellerDetailModalComponent implements OnInit {

  dweller: any = '';
  title: string = '';
  closeBtnName: string = '';
  list: any[] = [];

  dwellerForm = new FormGroup({
    guid: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push('PROFIT!!!');
    this.dwellerForm.controls.guid.setValue(this.dweller.guid);
    this.dwellerForm.controls.name.setValue(this.dweller.name);
  }

  onSubmit() {
    console.log(this.dwellerForm.value);
  }

}
