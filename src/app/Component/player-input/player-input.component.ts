import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/Models/player';
import { PlayerDataService } from 'src/app/Service/player-data.service';

@Component({
  selector: 'app-player-input',
  templateUrl: './player-input.component.html',
  styleUrls: ['./player-input.component.css']
})
export class PlayerInputComponent implements OnInit {
  players: Player[] = [new Player(),new Player()];
  constructor(private router: Router,
    private playerDataService: PlayerDataService) { }

  ngOnInit(): void {
  }
  

  addPlayer() {
    this.players.push(new Player());
  }

  canAddPlayer() {
    return this.players.length < 10; // Limit the number of players to 10 as an example.
  }

  goToScoreEntry() {
    // After collecting player names
this.playerDataService.setPlayers(this.players);
    this.router.navigate(['/score-entry']);
  }
}
