import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { DwellerListComponent } from './components/dweller-list/dweller-list.component';
import { DwellerDetailComponent } from './components/dweller-detail/dweller-detail.component';
import { DwellerCardComponent } from './components/dweller-card/dweller-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DwellerListComponent,
    DwellerDetailComponent,
    DwellerCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
