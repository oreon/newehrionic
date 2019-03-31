import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Measurement } from './measurement.model';
import { MeasurementActions, MeasurementActionTypes } from './measurement.actions';

export interface State extends EntityState<Measurement> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Measurement> = createEntityAdapter<Measurement>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: MeasurementActions
): State {
  switch (action.type) {
    case MeasurementActionTypes.AddMeasurement: {
      return adapter.addOne(action.payload.measurement, state);
    }

    case MeasurementActionTypes.UpsertMeasurement: {
      return adapter.upsertOne(action.payload.measurement, state);
    }

    case MeasurementActionTypes.AddMeasurements: {
      return adapter.addMany(action.payload.measurements, state);
    }

    case MeasurementActionTypes.UpsertMeasurements: {
      return adapter.upsertMany(action.payload.measurements, state);
    }

    case MeasurementActionTypes.UpdateMeasurement: {
      return adapter.updateOne(action.payload.measurement, state);
    }

    case MeasurementActionTypes.UpdateMeasurements: {
      return adapter.updateMany(action.payload.measurements, state);
    }

    case MeasurementActionTypes.DeleteMeasurement: {
      return adapter.removeOne(action.payload.id, state);
    }

    case MeasurementActionTypes.DeleteMeasurements: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case MeasurementActionTypes.LoadMeasurements: {
      return adapter.addAll(action.payload.measurements, state);
    }

    case MeasurementActionTypes.ClearMeasurements: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
