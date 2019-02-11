import { Action } from '@ngrx/store';
import {Tuto} from '../models/tuto';
import {AddTuto, TutoActions, TutoActionTypes} from '../actions/tuto.actions';


export const initialState: Tuto[] = [
  // name: 'tuto 0', url: 'http://www.udemy.com/tuot0'
  {name: 'tuto 0', url: 'http://www.udemy.com/tuot0'},
  {name: 'tuto 1', url: 'http://www.udemy.com/tuot1'},
  {name: 'tuto 2', url: 'http://www.udemy.com/tuot2'},
  {name: 'tuto 3', url: 'http://www.udemy.com/tuot3'}
];

export function reducer(state: Tuto[] = initialState, action: TutoActions) {

  switch (action.type) {
    case TutoActionTypes.AddTuto:
      return [...state, action.payload];

    case TutoActionTypes.DeleteTuto:
      state.splice(action.payload, 1)
      return state;

    case TutoActionTypes.LoadTutos:
      return [...state, action.payload];

    // case TutoActionTypes.LoadOneTuto:
    //   return state.fin();

    default:
      return state;
  }

}
