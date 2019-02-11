import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Tuto} from '../../models/tuto';
import {Observable} from 'rxjs';
import {AppState} from '../../models/app-state';
import {DeleteTuto, LoadOneTuto} from '../../actions/tuto.actions';

@Component({
  selector: 'app-tutos-list',
  templateUrl: './tutos-list.component.html',
  styleUrls: ['./tutos-list.component.css']
})
export class TutosListComponent implements OnInit {

  tutorials: Observable<Tuto[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.tutorials = this.store.select('tuto_reducer');
    // @ts-ignore
    this.tutorials = this.store.select( new LoadOneTuto(3));
  }

  delTutorial(index) {
    this.store.dispatch(new DeleteTuto(index) );
  }

}
