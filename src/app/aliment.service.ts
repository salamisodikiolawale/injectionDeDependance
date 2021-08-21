import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root', //Faire que le service est accésible dans tout l'appl donc remplace provide=[nom_service] dans app-module
})
export class AlimentService {
  public aliments: string[] = [];

  constructor(private logService: LogService) {}

  public removeAliment(index: number) {
    this.aliments.splice(index, 1);
    this.logService.log('Un aliment a été supprimé');
  }

  addAliment(aliment: string): void {
    this.aliments.push(aliment);
    this.logService.log('Un aliment a été ajouté');
  }
}
