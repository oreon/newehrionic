import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { MeasurementType } from './measurement-type.model';

export enum MeasurementTypeActionTypes {
  LoadMeasurementTypes = '[MeasurementType] Load MeasurementTypes',
  AddMeasurementType = '[MeasurementType] Add MeasurementType',
  UpsertMeasurementType = '[MeasurementType] Upsert MeasurementType',
  AddMeasurementTypes = '[MeasurementType] Add MeasurementTypes',
  UpsertMeasurementTypes = '[MeasurementType] Upsert MeasurementTypes',
  UpdateMeasurementType = '[MeasurementType] Update MeasurementType',
  UpdateMeasurementTypes = '[MeasurementType] Update MeasurementTypes',
  DeleteMeasurementType = '[MeasurementType] Delete MeasurementType',
  DeleteMeasurementTypes = '[MeasurementType] Delete MeasurementTypes',
  ClearMeasurementTypes = '[MeasurementType] Clear MeasurementTypes'
}

export class LoadMeasurementTypes implements Action {
  readonly type = MeasurementTypeActionTypes.LoadMeasurementTypes;

  constructor(public payload: { measurementTypes: MeasurementType[] }) {}
}

export class AddMeasurementType implements Action {
  readonly type = MeasurementTypeActionTypes.AddMeasurementType;

  constructor(public payload: { measurementType: MeasurementType }) {}
}

export class UpsertMeasurementType implements Action {
  readonly type = MeasurementTypeActionTypes.UpsertMeasurementType;

  constructor(public payload: { measurementType: MeasurementType }) {}
}

export class AddMeasurementTypes implements Action {
  readonly type = MeasurementTypeActionTypes.AddMeasurementTypes;

  constructor(public payload: { measurementTypes: MeasurementType[] }) {}
}

export class UpsertMeasurementTypes implements Action {
  readonly type = MeasurementTypeActionTypes.UpsertMeasurementTypes;

  constructor(public payload: { measurementTypes: MeasurementType[] }) {}
}

export class UpdateMeasurementType implements Action {
  readonly type = MeasurementTypeActionTypes.UpdateMeasurementType;

  constructor(public payload: { measurementType: Update<MeasurementType> }) {}
}

export class UpdateMeasurementTypes implements Action {
  readonly type = MeasurementTypeActionTypes.UpdateMeasurementTypes;

  constructor(public payload: { measurementTypes: Update<MeasurementType>[] }) {}
}

export class DeleteMeasurementType implements Action {
  readonly type = MeasurementTypeActionTypes.DeleteMeasurementType;

  constructor(public payload: { id: string }) {}
}

export class DeleteMeasurementTypes implements Action {
  readonly type = MeasurementTypeActionTypes.DeleteMeasurementTypes;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearMeasurementTypes implements Action {
  readonly type = MeasurementTypeActionTypes.ClearMeasurementTypes;
}

export type MeasurementTypeActions =
 LoadMeasurementTypes
 | AddMeasurementType
 | UpsertMeasurementType
 | AddMeasurementTypes
 | UpsertMeasurementTypes
 | UpdateMeasurementType
 | UpdateMeasurementTypes
 | DeleteMeasurementType
 | DeleteMeasurementTypes
 | ClearMeasurementTypes;
