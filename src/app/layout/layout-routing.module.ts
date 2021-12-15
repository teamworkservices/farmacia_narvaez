import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutfullComponent } from './layoutfull/layoutfull.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
},
{
  path: '',
  children: [
    {
      path: 'pages',
      component: LayoutfullComponent,
      loadChildren: () => import('./layout.module').then(m=>m.LayoutModule),
    }
  ]
}

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
