import { Component, OnInit } from '@angular/core';
import { Dweller } from '../../models/DwellerModel';

@Component({
  selector: 'app-dweller-list',
  templateUrl: './dweller-list.component.html',
  styleUrls: ['./dweller-list.component.css']
})
export class DwellerListComponent implements OnInit {

  public dwellers: Array<Dweller> = [
    {guid: "xxxxxxxx", name: "Guilherme Gatto",  buildName: "Esmeralda", aptNumber: 1907},
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
