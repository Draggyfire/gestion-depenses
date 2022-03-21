import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Personne} from "./personne";
import {PersonnesService} from "./services/personnes.service";
import {Depense} from "./depense";

@Component({
  selector: 'app-details-personne',
  template: `
    <mat-card class="example-card" *ngIf="personne">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{personne.nom}} {{personne.prenom}}</mat-card-title>
        <mat-card-subtitle>{{personne.id}}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        Plafond : {{personne.plafond}}<br>
        Dépense : {{depense}}<br>
        <app-details-depenses [depenses]="depenses"></app-details-depenses>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
  ]
})
export class DetailsPersonneComponent implements OnInit {
  personne : Personne|undefined;
  depense:number=0;
  depenses:Depense[]=[];

  constructor(public route : ActivatedRoute,public service:PersonnesService) {
    this.personne= <Personne>{};
  }

  ngOnInit(): void {
    const id= +(this.route.snapshot.paramMap.get('id') || 0);
    this.personne=this.service.getPersonne(id);
    if(this.personne!= undefined) {
      this.depense = this.service.totalDepenses(this.personne);
      this.depenses=this.service.getDepenses(this.personne);
    }else {
      this.depense=0;
      this.depenses=[];
    }
    const sort = this.route.snapshot.queryParamMap.get('filtre');
    console.log(sort);
    if(this.depenses.some((elt)=>elt.nature.toLowerCase()==sort?.toLowerCase())){
      this.depenses=this.depenses.filter(elt => elt.nature.toLowerCase()==sort?.toLowerCase());
    }
  }

}
