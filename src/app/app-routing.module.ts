import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListTutosComponent} from './components/list-tutos/list-tutos.component';

const routes: Routes = [
  {path: '', component: ListTutosComponent, pathMatch: 'full'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
