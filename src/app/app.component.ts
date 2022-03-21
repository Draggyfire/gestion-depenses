import { Component } from '@angular/core';
import {Datas} from "./mock-data";
import {Personne} from "./personne";
import {MessagesService} from "./messages.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-depenses';
  message = new MessagesService;
  personnes:Personne[] = Datas.getInstance().generePersonnes();

  constructor(public messagesService: MessagesService) {
    // plutôt que d'utiliser l'instruction
    // console.log('Bonjour du contrôleur du composant app');
    messagesService.add('Bonjour du composant app');
  }
}
