import {Component, Input, OnInit} from '@angular/core';
import {Depense} from "./depense";
import {MessagesService} from "./messages.service";
import {PersonnesService} from "./services/personnes.service";

@Component({
  selector: 'app-details-depenses',
  template: `
    <button (click)="setSort(count)">{{ bouton }}</button>
    <mat-list>
      <mat-list-item *ngFor="let depense of depenses">{{depense.montant}} {{depense.dd}} {{depense.libelle}} <b>{{depense.nature}}</b></mat-list-item>
    </mat-list>

  `,
  styles: [
  ]
})
export class DetailsDepensesComponent implements OnInit {
  @Input() depenses: Depense[];
  count:number=0;
  bouton:String="Tri ordre chronologique";
  constructor(public messagesService:MessagesService,public service: PersonnesService) {
    this.depenses=[];
  }

  setSort(number: number) {
    this.count++;
    if(number%3==0){
      this.depenses = this.depenses.sort((a, b) => new Date(a.dd).getTime() - new Date(b.dd).getTime());
      this.bouton="Tri ordre chronologique";
    }else if(number%3==1){
      this.depenses = this.depenses.sort((a,b)=> b.montant-a.montant);
      this.bouton="Tri montant décroissant";
    }else{
      this.depenses= this.depenses.sort(function (a,b){
        if(a.nature>b.nature){
          return -1;
        }
        if(a.nature<b.nature){
          return 1;
        }
        return a.montant-b.montant;
      });
      this.bouton="Tri nature/montant"
    }
    this.messagesService.add("Dépense triée ! ");
  }

  ngOnInit(): void {
  }

}
