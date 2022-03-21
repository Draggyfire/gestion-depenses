import {Component, OnInit} from '@angular/core';
import {PersonnesService} from "./services/personnes.service";
import {Personne} from "./personne";
import {MessagesService} from "./messages.service";

@Component({
  selector: 'app-liste-personnes',
  template: `
    <div>
      <table mat-table [dataSource]="personnes" class="mat-elevation-z8">
        <!--- Note that these columns can be defined in any order.
              The actual rendered columns are set as a property on the row definition" -->
        <!-- Position Column -->
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>ID</th>
          <td mat-cell *matCellDef="let element"> {{element.id}} </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="nom">
          <th mat-header-cell *matHeaderCellDef> Nom </th>
          <td mat-cell *matCellDef="let element"> {{element.nom}} </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="prenom">
          <th mat-header-cell *matHeaderCellDef> Prenom </th>
          <td mat-cell *matCellDef="let element"> {{element.prenom}} </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="plafond">
          <th mat-header-cell *matHeaderCellDef> Plafond </th>
          <td mat-cell *matCellDef="let element"> {{element.plafond}} </td>
        </ng-container>

        <ng-container matColumnDef="details">
          <th mat-header-cell *matHeaderCellDef>Action</th>
          <td mat-cell *matCellDef="let element"> <mat-icon [routerLink]="['/personnes', element.id]">loupe</mat-icon> </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
      <button mat-flat-button (click)="setSort(0)">ID:Croissant</button>
      <button mat-flat-button color="primary" (click)="setSort(1)">Nom:Croissant</button>
      <button mat-flat-button color="accent" (click)="setSort(2)">Nom:Décroissant</button>
    </div>
  `,
  styles: []
})
export class ListePersonnesComponent implements OnInit {
  personnes: Personne[];
  displayedColumns:String[]=['id','nom','prenom','plafond','details'];

  constructor(public service: PersonnesService, public messagesService: MessagesService) {
    this.personnes = service.getPersonnes()
  }

  setSort(number: number) {
    this.personnes = this.service.getPersonnes(number);
    this.messagesService.add("Liste triée ! ")

  }

  ngOnInit(): void {

  }

}
