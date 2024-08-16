import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraftPlanRoutingModule } from './draft-plan-routing.module';
import { DraftPlanComponent } from './draft-plan.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DraftPlanComponent
  ],
  imports: [
    CommonModule,
    DraftPlanRoutingModule,
    FormsModule
  ]
})
export class DraftPlanModule { }
