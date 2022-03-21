import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from "@angular/material/grid-list";
import {MessagesService} from './messages.service';
import { ShowMessagesComponent } from './show-messages.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {PersonnesService} from "./services/personnes.service";
import { ListePersonnesComponent } from './liste-personnes.component';
import {MatButtonModule} from "@angular/material/button";
import { DashboardComponent } from './dashboard.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import { DetailsPersonneComponent } from './details-personne.component';
import {MatCardModule} from "@angular/material/card";
import { DetailsDepensesComponent } from './details-depenses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowMessagesComponent,
    ListePersonnesComponent,
    DashboardComponent,
    PageNotFoundComponent,
    DetailsPersonneComponent,
    DetailsDepensesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatListModule,
        MatIconModule,
        MatExpansionModule,
        MatButtonModule,
        MatToolbarModule,
        MatTableModule,
        MatCardModule
    ],
  providers: [MessagesService,PersonnesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
