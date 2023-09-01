import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/Models/player';
import { PlayerDataService } from 'src/app/Service/player-data.service';

@Component({
  selector: 'app-score-entry',
  templateUrl: './score-entry.component.html',
  styleUrls: ['./score-entry.component.css']
})
export class ScoreEntryComponent implements OnInit {
  players: Player[] = [];  
  round: number = 0;
  constructor(private router: Router,
    private playerDataService: PlayerDataService) {
      this.players = this.playerDataService.getPlayers();
      console.log(this.players);
     }

  ngOnInit(): void {
  }
  submitScores() {
    this.players.forEach(player => {
      player.totalScore! += player.scores[this.round]!;
    });
    this.round++;
    // Navigate to the next screen (results)
    this.playerDataService.setPlayers(this.players);
    this.router.navigate(['/score-summary']);
  }
}
