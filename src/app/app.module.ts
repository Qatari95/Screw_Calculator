import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerInputComponent } from './Component/player-input/player-input.component';
import { ScoreEntryComponent } from './Component/score-entry/score-entry.component';
import { ScoreSummaryComponent } from './Component/score-summary/score-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerInputComponent,
    ScoreEntryComponent,
    ScoreSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [FormsModule]
  ],
  providers: [PlayerInputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
