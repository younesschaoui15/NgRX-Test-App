import { Action } from '@ngrx/store';
import {Tuto} from '../models/tuto';

export enum TutoActionTypes {
  AddTuto = '[Tuto] ajouter tuto',
  DeleteTuto = '[Tuto] supprimer tuto',
  LoadTutos = '[Tuto] charger tutos',
  LoadOneTuto = '[Tuto] charger un seul tuto'
}

export type TutoActions = AddTuto | DeleteTuto | LoadTutos | LoadOneTuto;

export class AddTuto implements Action {

  readonly type = TutoActionTypes.AddTuto;

  constructor(public payload: Tuto) {}
}

export class DeleteTuto implements Action {
  readonly type = TutoActionTypes.DeleteTuto;

  constructor(public payload: number) {}
}

export class LoadTutos implements Action {
  readonly type = TutoActionTypes.LoadTutos;

  constructor(public payload: Tuto[]) {}
}
export class LoadOneTuto implements Action {
  readonly type = TutoActionTypes.LoadOneTuto;

  constructor(public id: number) {}
}


