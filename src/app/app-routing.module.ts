import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TutosListComponent} from './containers/tutos-list/tutos-list.component';
import {AddTutoComponent} from './containers/add-tuto/add-tuto.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: TutosListComponent},
  { path: 'add', component: AddTutoComponent},
  {path: '**', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
