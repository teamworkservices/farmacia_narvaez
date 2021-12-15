import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutfullComponent } from './layoutfull/layoutfull.component';

const routes: Routes = [
 

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
