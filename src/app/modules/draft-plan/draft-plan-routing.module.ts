import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftPlanComponent } from './draft-plan.component';

const routes: Routes = [{ path: '', component: DraftPlanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftPlanRoutingModule { }
