import {Injectable} from '@angular/core';
import {Datas} from "../mock-data";
import {Personne} from "../personne";
import {Depense} from "../depense";

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
  personnes:Personne[]=Datas.getInstance().generePersonnes()

  constructor() {
  }


  getPersonnes(sort?:number):Personne[]{
    let pers: Personne[]= [...this.personnes];
    switch (sort) {
      case 0:
        return pers.sort((a,b)=>a.id-b.id)
      case 1:
        return pers.sort(function(a, b) {
          if (a.nom > b.nom) {
            return 1;
          }
          if (a.nom < b.nom) {
            return -1;
          }
          return 0;
        });
      case 2:
        return pers.sort(function(a, b) {
          if (a.nom < b.nom) {
            return 1;
          }
          if (a.nom > b.nom) {
            return -1;
          }
          return 0;
        });
      default:
        return pers;
    }

  }

  totalDepenses(personne:Personne):number{
    let depense:Depense[] = personne.depenses;
    let total:number = 0;
    depense.forEach((elt)=>total+=elt.montant);
    return total;
  }

  getDepenses(personne:Personne){
    return personne.depenses;
  }


  getPersonne(id:number):Personne|undefined{
    let pers: Personne[]= [...this.personnes];
    console.log(pers);
    return this.personnes.find((pers) => pers.id==id);
  }

}
