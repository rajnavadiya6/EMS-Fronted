import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MeventComponent } from './mevent.component';

const routes: Routes = [
  {
    path: '',
    component: MeventComponent,

  }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MeventRoutingModule { }
export const routedComponents = [MeventComponent];
