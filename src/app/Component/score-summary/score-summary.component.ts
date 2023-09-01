import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/Models/player';
import { PlayerDataService } from 'src/app/Service/player-data.service';

@Component({
  selector: 'app-score-summary',
  templateUrl: './score-summary.component.html',
  styleUrls: ['./score-summary.component.css']
})
export class ScoreSummaryComponent implements OnInit {
  players: Player[] = [];
  round = 0;
  constructor(
    private playerDataService: PlayerDataService) {this.players = this.playerDataService.getPlayers();}

  ngOnInit(): void {
  }

}
