import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from '../../models/app-state';
import {AddTuto, TutoActions} from '../../actions/tuto.actions';

@Component({
  selector: 'app-add-tuto',
  templateUrl: './add-tuto.component.html',
  styleUrls: ['./add-tuto.component.css']
})
export class AddTutoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTutorial(name, url) {
    this.store.dispatch(new AddTuto({name, url}) );
  }
}
