import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerInputComponent } from './Component/player-input/player-input.component';
import { ScoreEntryComponent } from './Component/score-entry/score-entry.component';
import { ScoreSummaryComponent } from './Component/score-summary/score-summary.component';

const routes: Routes = [
  { path: '', component: PlayerInputComponent },
  { path: 'score-entry', component: ScoreEntryComponent },
  { path: 'score-summary', component: ScoreSummaryComponent }, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
