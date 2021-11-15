import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MdivisionComponent} from './mdivision.component'

const routes: Routes = [
{
  path: '',
     component: MdivisionComponent,
    data: {
      title: 'mdivision'
          },
}

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class MdivisionRoutingModule { }
export const routedComponents = [MdivisionComponent];

