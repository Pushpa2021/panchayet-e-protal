import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchemeComponent } from './scheme.component';

const routes: Routes = [{ path: '', component: SchemeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemeRoutingModule { }
