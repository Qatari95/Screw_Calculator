import { Injectable } from '@angular/core';
import { Player } from '../Models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataService {
  private players: Player[] = [];

  getPlayers(): Player[] {
    return this.players;
  }

  setPlayers(players: Player[]): void {
    this.players = players;
  }
}
