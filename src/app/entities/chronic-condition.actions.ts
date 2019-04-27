import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ChronicCondition } from './chronic-condition.model';

export enum ChronicConditionActionTypes {
  LoadChronicConditions = '[ChronicCondition] Load ChronicConditions',
  AddChronicCondition = '[ChronicCondition] Add ChronicCondition',
  UpsertChronicCondition = '[ChronicCondition] Upsert ChronicCondition',
  AddChronicConditions = '[ChronicCondition] Add ChronicConditions',
  UpsertChronicConditions = '[ChronicCondition] Upsert ChronicConditions',
  UpdateChronicCondition = '[ChronicCondition] Update ChronicCondition',
  UpdateChronicConditions = '[ChronicCondition] Update ChronicConditions',
  DeleteChronicCondition = '[ChronicCondition] Delete ChronicCondition',
  DeleteChronicConditions = '[ChronicCondition] Delete ChronicConditions',
  ClearChronicConditions = '[ChronicCondition] Clear ChronicConditions'
}

export class LoadChronicConditions implements Action {
  readonly type = ChronicConditionActionTypes.LoadChronicConditions;

  constructor(public payload: { chronicConditions: ChronicCondition[] }) {}
}

export class AddChronicCondition implements Action {
  readonly type = ChronicConditionActionTypes.AddChronicCondition;

  constructor(public payload: { chronicCondition: ChronicCondition }) {}
}

export class UpsertChronicCondition implements Action {
  readonly type = ChronicConditionActionTypes.UpsertChronicCondition;

  constructor(public payload: { chronicCondition: ChronicCondition }) {}
}

export class AddChronicConditions implements Action {
  readonly type = ChronicConditionActionTypes.AddChronicConditions;

  constructor(public payload: { chronicConditions: ChronicCondition[] }) {}
}

export class UpsertChronicConditions implements Action {
  readonly type = ChronicConditionActionTypes.UpsertChronicConditions;

  constructor(public payload: { chronicConditions: ChronicCondition[] }) {}
}

export class UpdateChronicCondition implements Action {
  readonly type = ChronicConditionActionTypes.UpdateChronicCondition;

  constructor(public payload: { chronicCondition: Update<ChronicCondition> }) {}
}

export class UpdateChronicConditions implements Action {
  readonly type = ChronicConditionActionTypes.UpdateChronicConditions;

  constructor(public payload: { chronicConditions: Update<ChronicCondition>[] }) {}
}

export class DeleteChronicCondition implements Action {
  readonly type = ChronicConditionActionTypes.DeleteChronicCondition;

  constructor(public payload: { id: string }) {}
}

export class DeleteChronicConditions implements Action {
  readonly type = ChronicConditionActionTypes.DeleteChronicConditions;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearChronicConditions implements Action {
  readonly type = ChronicConditionActionTypes.ClearChronicConditions;
}

export type ChronicConditionActions =
 LoadChronicConditions
 | AddChronicCondition
 | UpsertChronicCondition
 | AddChronicConditions
 | UpsertChronicConditions
 | UpdateChronicCondition
 | UpdateChronicConditions
 | DeleteChronicCondition
 | DeleteChronicConditions
 | ClearChronicConditions;
