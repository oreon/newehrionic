import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { MeasurementType } from './measurement-type.model';
import { MeasurementTypeActions, MeasurementTypeActionTypes } from './measurement-type.actions';

export interface State extends EntityState<MeasurementType> {
  // additional entities state properties
}

export const adapter: EntityAdapter<MeasurementType> = createEntityAdapter<MeasurementType>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: MeasurementTypeActions
): State {
  switch (action.type) {
    case MeasurementTypeActionTypes.AddMeasurementType: {
      return adapter.addOne(action.payload.measurementType, state);
    }

    case MeasurementTypeActionTypes.UpsertMeasurementType: {
      return adapter.upsertOne(action.payload.measurementType, state);
    }

    case MeasurementTypeActionTypes.AddMeasurementTypes: {
      return adapter.addMany(action.payload.measurementTypes, state);
    }

    case MeasurementTypeActionTypes.UpsertMeasurementTypes: {
      return adapter.upsertMany(action.payload.measurementTypes, state);
    }

    case MeasurementTypeActionTypes.UpdateMeasurementType: {
      return adapter.updateOne(action.payload.measurementType, state);
    }

    case MeasurementTypeActionTypes.UpdateMeasurementTypes: {
      return adapter.updateMany(action.payload.measurementTypes, state);
    }

    case MeasurementTypeActionTypes.DeleteMeasurementType: {
      return adapter.removeOne(action.payload.id, state);
    }

    case MeasurementTypeActionTypes.DeleteMeasurementTypes: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case MeasurementTypeActionTypes.LoadMeasurementTypes: {
      return adapter.addAll(action.payload.measurementTypes, state);
    }

    case MeasurementTypeActionTypes.ClearMeasurementTypes: {
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
