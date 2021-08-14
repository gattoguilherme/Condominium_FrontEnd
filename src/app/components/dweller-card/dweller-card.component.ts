import { Component, Input, OnInit, Optional } from '@angular/core';
import { Dweller } from 'src/app/models/DwellerModel';

@Component({
  selector: 'app-dweller-card',
  templateUrl: './dweller-card.component.html',
  styleUrls: ['./dweller-card.component.css']
})
export class DwellerCardComponent implements OnInit {

  @Input() dweller: Dweller = {guid:"", name:"", buildName:"", aptNumber:0};

  constructor() {
  }

  ngOnInit(): void {
  }

}
