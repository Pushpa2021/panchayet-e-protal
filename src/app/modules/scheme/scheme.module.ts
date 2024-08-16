import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemeRoutingModule } from './scheme-routing.module';
import { SchemeComponent } from './scheme.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SchemeComponent
  ],
  imports: [
    CommonModule,
    SchemeRoutingModule,
    FormsModule,
  ]
})
export class SchemeModule { }
