import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Script } from './script.model';

export enum ScriptActionTypes {
  LoadScripts = '[Script] Load Scripts',
  AddScript = '[Script] Add Script',
  UpsertScript = '[Script] Upsert Script',
  AddScripts = '[Script] Add Scripts',
  UpsertScripts = '[Script] Upsert Scripts',
  UpdateScript = '[Script] Update Script',
  UpdateScripts = '[Script] Update Scripts',
  DeleteScript = '[Script] Delete Script',
  DeleteScripts = '[Script] Delete Scripts',
  ClearScripts = '[Script] Clear Scripts'
}

export class LoadScripts implements Action {
  readonly type = ScriptActionTypes.LoadScripts;

  constructor(public payload: { scripts: Script[] }) {}
}

export class AddScript implements Action {
  readonly type = ScriptActionTypes.AddScript;

  constructor(public payload: { script: Script }) {}
}

export class UpsertScript implements Action {
  readonly type = ScriptActionTypes.UpsertScript;

  constructor(public payload: { script: Script }) {}
}

export class AddScripts implements Action {
  readonly type = ScriptActionTypes.AddScripts;

  constructor(public payload: { scripts: Script[] }) {}
}

export class UpsertScripts implements Action {
  readonly type = ScriptActionTypes.UpsertScripts;

  constructor(public payload: { scripts: Script[] }) {}
}

export class UpdateScript implements Action {
  readonly type = ScriptActionTypes.UpdateScript;

  constructor(public payload: { script: Update<Script> }) {}
}

export class UpdateScripts implements Action {
  readonly type = ScriptActionTypes.UpdateScripts;

  constructor(public payload: { scripts: Update<Script>[] }) {}
}

export class DeleteScript implements Action {
  readonly type = ScriptActionTypes.DeleteScript;

  constructor(public payload: { id: string }) {}
}

export class DeleteScripts implements Action {
  readonly type = ScriptActionTypes.DeleteScripts;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearScripts implements Action {
  readonly type = ScriptActionTypes.ClearScripts;
}

export type ScriptActions =
 LoadScripts
 | AddScript
 | UpsertScript
 | AddScripts
 | UpsertScripts
 | UpdateScript
 | UpdateScripts
 | DeleteScript
 | DeleteScripts
 | ClearScripts;
