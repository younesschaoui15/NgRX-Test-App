import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Tuto} from '../../models/tuto';
import {Observable} from 'rxjs';
import {AppState} from '../../app-state';
import {DeleteTuto} from '../../actions/tuto.actions';

@Component({
  selector: 'app-tutos-list',
  templateUrl: './tutos-list.component.html',
  styleUrls: ['./tutos-list.component.css']
})
export class TutosListComponent implements OnInit {

  tutorials: Observable<Tuto[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tuto_reducer');
  }

  ngOnInit() {
  }

  delTutorial(index) {
    this.store.dispatch(new DeleteTuto(index) );
  }

}
