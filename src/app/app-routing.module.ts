import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepSequencerComponent } from './step-sequencer/step-sequencer.component';

const routes: Routes = [
  { path: '', component: StepSequencerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
