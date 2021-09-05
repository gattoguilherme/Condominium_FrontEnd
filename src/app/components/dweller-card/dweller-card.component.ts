import { Component, Input, OnInit, Optional } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Dweller } from 'src/app/models/DwellerModel';
import { DwellerDetailModalComponent } from '../dweller-detail-modal/dweller-detail-modal.component';

@Component({
  selector: 'app-dweller-card',
  templateUrl: './dweller-card.component.html',
  styleUrls: ['./dweller-card.component.css']
})
export class DwellerCardComponent implements OnInit {

  bsModalRef: any = "";
  @Input() dweller: Dweller = {guid:"", name:"", buildName:"", aptNumber:0};

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  showModal() {
    const initialState = {
      dweller: this.dweller,
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: this.dweller.name
    };
    this.bsModalRef = this.modalService.show(DwellerDetailModalComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Fechar';
  }
}
