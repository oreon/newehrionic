import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Measurement } from './measurement.model';

export enum MeasurementActionTypes {
  LoadMeasurements = '[Measurement] Load Measurements',
  AddMeasurement = '[Measurement] Add Measurement',
  UpsertMeasurement = '[Measurement] Upsert Measurement',
  AddMeasurements = '[Measurement] Add Measurements',
  UpsertMeasurements = '[Measurement] Upsert Measurements',
  UpdateMeasurement = '[Measurement] Update Measurement',
  UpdateMeasurements = '[Measurement] Update Measurements',
  DeleteMeasurement = '[Measurement] Delete Measurement',
  DeleteMeasurements = '[Measurement] Delete Measurements',
  ClearMeasurements = '[Measurement] Clear Measurements'
}

export class LoadMeasurements implements Action {
  readonly type = MeasurementActionTypes.LoadMeasurements;

  constructor(public payload: { measurements: Measurement[] }) {}
}

export class AddMeasurement implements Action {
  readonly type = MeasurementActionTypes.AddMeasurement;

  constructor(public payload: { measurement: Measurement }) {}
}

export class UpsertMeasurement implements Action {
  readonly type = MeasurementActionTypes.UpsertMeasurement;

  constructor(public payload: { measurement: Measurement }) {}
}

export class AddMeasurements implements Action {
  readonly type = MeasurementActionTypes.AddMeasurements;

  constructor(public payload: { measurements: Measurement[] }) {}
}

export class UpsertMeasurements implements Action {
  readonly type = MeasurementActionTypes.UpsertMeasurements;

  constructor(public payload: { measurements: Measurement[] }) {}
}

export class UpdateMeasurement implements Action {
  readonly type = MeasurementActionTypes.UpdateMeasurement;

  constructor(public payload: { measurement: Update<Measurement> }) {}
}

export class UpdateMeasurements implements Action {
  readonly type = MeasurementActionTypes.UpdateMeasurements;

  constructor(public payload: { measurements: Update<Measurement>[] }) {}
}

export class DeleteMeasurement implements Action {
  readonly type = MeasurementActionTypes.DeleteMeasurement;

  constructor(public payload: { id: string }) {}
}

export class DeleteMeasurements implements Action {
  readonly type = MeasurementActionTypes.DeleteMeasurements;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearMeasurements implements Action {
  readonly type = MeasurementActionTypes.ClearMeasurements;
}

export type MeasurementActions =
 LoadMeasurements
 | AddMeasurement
 | UpsertMeasurement
 | AddMeasurements
 | UpsertMeasurements
 | UpdateMeasurement
 | UpdateMeasurements
 | DeleteMeasurement
 | DeleteMeasurements
 | ClearMeasurements;
